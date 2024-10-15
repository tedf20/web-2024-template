const TELEGRAM_BOT_TOKEN = 'AAGs6FHLFyWOq0we_38qiZN_NN-LqG-0RFQ';
const TELEGRAM_CHAT_ID = '5829033738';

export async function sendToTelegramBot(email: string) {
  const message = `New application received from: ${email}`;
  const url = '/api/sendTelegram'; // This will be our serverless function endpoint

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Telegram');
  }
}
