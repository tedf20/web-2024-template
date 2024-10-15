const TELEGRAM_BOT_TOKEN = 'AAGs6FHLFyWOq0we_38qiZN_NN-LqG-0RFQ';
const TELEGRAM_CHAT_ID = '5829033738';

export async function sendToTelegramBot(email: string) {
  const message = `New application received from: ${email}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Telegram');
  }
}
