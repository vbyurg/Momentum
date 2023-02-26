//  Quotes
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const quotes = 'quoteRU.json';

async function getQuotes() {
    const res = await fetch(quotes);
    const data = await res.json();

    let random = data[Math.floor(Math.random() * data.length)];
    quote.innerText = `"${random.text}"`;
    author.innerText = random.author;
}
getQuotes();

changeQuote.addEventListener('click', getQuotes);