import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;

interface Transaction {
  date: string;
  description: string;
  amount: number;
}

export async function parsePDF(file: File): Promise<Transaction[]> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await getDocument(arrayBuffer).promise;
  const transactions: Transaction[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const text = textContent.items.map((item: any) => item.str).join(' ');

    // This is a simple regex pattern. You might need to adjust it based on your specific PDF format
    const pattern = /(\d{2}\/\d{2}\/\d{4})\s+([\w\s]+)\s+(-?\$?\d+\.\d{2})/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
      transactions.push({
        date: match[1],
        description: match[2].trim(),
        amount: parseFloat(match[3].replace('$', '')),
      });
    }
  }

  return transactions;
}
