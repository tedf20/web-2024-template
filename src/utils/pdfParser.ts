import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;

interface DynamicData {
  [key: string]: string | number | DynamicData;
}

export async function parsePDF(file: File): Promise<DynamicData[]> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await getDocument(arrayBuffer).promise;
  const allPageData: string[] = [];

  // Extract text from all pages
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    allPageData.push(pageText);
  }

  // Analyze the structure of the data
  const structure = analyzeStructure(allPageData.join('\n'));

  // Parse the data based on the identified structure
  return parseDataWithStructure(allPageData.join('\n'), structure);
}

function analyzeStructure(text: string): DynamicData {
  const structure: DynamicData = {};

  // Look for common patterns in financial documents
  const datePattern = /\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/g;
  const amountPattern = /\$?\s?\d+([.,]\d{2})?/g;
  const descriptionPattern = /[A-Z\s]{5,}/g;

  const dates = text.match(datePattern);
  const amounts = text.match(amountPattern);
  const descriptions = text.match(descriptionPattern);

  if (dates) structure['date'] = 'string';
  if (amounts) structure['amount'] = 'number';
  if (descriptions) structure['description'] = 'string';

  // Look for potential column headers
  const lines = text.split('\n');
  const potentialHeaders = lines.filter(line => line.split(/\s+/).length > 1 && line.split(/\s+/).length < 5);
  potentialHeaders.forEach(header => {
    const fields = header.split(/\s+/);
    fields.forEach(field => {
      if (!structure[field.toLowerCase()]) {
        structure[field.toLowerCase()] = 'string';
      }
    });
  });

  return structure;
}

function parseDataWithStructure(text: string, structure: DynamicData): DynamicData[] {
  const lines = text.split('\n');
  const data: DynamicData[] = [];

  lines.forEach(line => {
    const entry: DynamicData = {};
    let remainingLine = line;

    Object.keys(structure).forEach(key => {
      if (structure[key] === 'number') {
        const match = remainingLine.match(/\$?\s?\d+([.,]\d{2})?/);
        if (match) {
          entry[key] = parseFloat(match[0].replace('$', '').replace(',', ''));
          remainingLine = remainingLine.replace(match[0], '').trim();
        }
      } else if (key === 'date') {
        const match = remainingLine.match(/\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/);
        if (match) {
          entry[key] = match[0];
          remainingLine = remainingLine.replace(match[0], '').trim();
        }
      } else {
        entry[key] = remainingLine.trim();
      }
    });

    if (Object.keys(entry).length > 0) {
      data.push(entry);
    }
  });

  return data;
}
