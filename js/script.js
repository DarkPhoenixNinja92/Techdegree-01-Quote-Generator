/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * As an unapologetic Final Fantasy 14 quotes, that is where all of mine come from - me picking some of my favorite sayings from that game and/or those I found the most amusing.
***/
const quotes = [
  {
    quote: 'I am...not interested, little sun. Try again when you have become a man.',
    source: "Y'shtola Rhul",
    citation: 'Final Fantasy XIV',
    year: '2018',
    burn: 'Savage'
  },
  {
    quote: 'Quiet, Nero. We Adults are thinking.',
    source: 'Cid Garlond',
    citation: 'Final Fantasy XIV',
    year: '2018'
  },
  {
    quote: 'We did everything right, everything that was asked of us, and still—still it came to this! You of all people should understand! We cannot—we will not falter. We brought our world to the brink of destruction, and now we must save it.',
    source: 'Ardbert',
    citation: 'Final Fantasy XIV',
    year: '2016'
  },
  {
    quote: 'A quest to find your purpose, knowing your end is assured. To find the strength to continue when all strength has left you. To find joy even as darkness descends...and amidst deepest despair, light everlasting.',
    source: 'Venat',
    citation: 'Final Fantasy XIV',
    year: '2021'
  },
  {
    quote: 'Those were the days of promises and vows—of tentative first steps into an uncertain future. A future shaped by the choices we made, in ways we could never have foreseen. Born of good and evil, of light and darkness, and shepherded by our hand.\
     Be it for weal, or be it for woe.',
     source: 'Count Edmont de Fortemps',
     citation: 'Final Fantasy XIV',
     year: '2016'
  },
  {
    quote: 'He that holdeth fast unto his convictions shall never count betrayal amongst his crimes, though all the world may call him villain. My path is unchanged; my creed sacrosanct. This I believe with all my heart.',
    source: 'Urianger Augurelt',
    citation: 'Final Fantasy XIV',
    year: '2016'
  },
  {
    quote: 'Dying is easy, soldier. Living is harder.',
    source: 'Curtis Hext',
    citation: 'Final Fantasy XIV',
    year: '2017'
  }
];


/***
 * Meet the most boring part of my code (in my opinion). The bit where I generate a random number and use it to pick a quote from my array.
***/
const getRandomQuote = () => {
  const quoteNum = Math.floor(Math.random() * quotes.length);
  return quotes[quoteNum];
}

getRandomQuote();

let colorList = ['#dd79ed', '#68dac2', '#8dfcd6', '#fb7b85', '#15dd86', '#3ac162'];

const changeBackground = () => {
  let colorNum = Math.floor(Math.random() * (colorList.length - 1));
  document.body.style.backgroundColor = colorList[colorNum];
}


/***
 * Finally something interesting! This part is the 'meat' of the project. I start off with a variable that recieves the result of the getRandomQuote function before setting another variable equal to two paragraph tags eachh containing their
 * respective string, accessed using dot notation. Following that, I have a set of two if statements to check for the presence of the citation and year properties and concatenate a span containing them onto the previous string if they exist followed by
 * creating the closing paragraph tag and setting the inner html of the quote box element equal to my variable that now contains the updated quote.
***/
const printQuote = () => {
  changeBackground();
  let randomQuote = getRandomQuote();
  let quoteHTML = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
  if(randomQuote.citation) {
    quoteHTML = quoteHTML + `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    quoteHTML = quoteHTML + `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.burn) {
    quoteHTML = quoteHTML + `<span class="burn">The Burn: ${randomQuote.burn}</span>`
  }
  quoteHTML = quoteHTML + `</p>`;

  document.getElementById('quote-box').innerHTML = quoteHTML;
}


/***
The event listener to change the quote when a button is clicked came with the initial code but I decided to give it my own flair by adding an extra one for loading so that a quote will be randomly generated when the page is loaded.
***/
window.addEventListener('load', printQuote);
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/**
 * The line below will run the printQuote function to refresh and randomly generate a new quote every 15 seconds.
 */
window.setInterval(printQuote, 15000);