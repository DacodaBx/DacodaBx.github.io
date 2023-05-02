const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const authorText2 = document.getElementById("author2");
// let apiQuotes = [];

function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if(!quote.author){
        authorText.textContent = "Unknown";
    } else{
        authorText.textContent = quote.author;
    }
    if(quote.text.length > 100){
        quoteText.classList.add(long-quote);
    } else{
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
    authorText2.textContent = quote.author2;
}
// Tweet Prediction
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}
// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
// async function getQuotes(){
//     const apiUrl = "https://type.fit/api/quotes";
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json()
//         newQuote();
//     } catch (error) {

//     }
// } 
// On Load
// getQuotes();
newQuote();