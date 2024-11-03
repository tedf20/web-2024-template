const API_URL = 'https://sinikov.com/public/api/v1/lumic/other';

export async function submitApplication(email: string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit application');
  }

  return await response.json();
}
