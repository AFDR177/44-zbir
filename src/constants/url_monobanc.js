// Посилання на монобанку.
export const DONATION_URL = 'https://send.monobank.ua/jar/AC7zMvXYt3';
// URL балансу до монобанки через JAR_ID.
const BALANSE_BASE_URL = 'https://api.monobank.ua/bank/jar/';
// JAR_ID нашої банки.
const JAR_ID = '2TDxqw1vqQaxKFe74JT8jzmmu8Ra8ErB';

export const BALANSE_URL = `${BALANSE_BASE_URL}${JAR_ID}`;
// Залишились питання по налаштуванню - пишіть: brodich_vlad@ukr.net