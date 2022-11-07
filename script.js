// Date
const d = new Date();
document.getElementById("yDate").innerHTML = d.getFullYear();  

const d2 = new Date();
document.getElementById("mDate").innerHTML = d2.getMonth() + 1;

const d3 = new Date();
document.getElementById("dDate").innerHTML = d3.getDate();

// Image change on refresh page
let myArt = 0;
    carousel();

    function carousel() {
    var i;
     var x = document.getElementsByClassName("land");
     for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
     }
    myArt++;
     if (myArt > x.length) {myArt = 1}    
     x[myArt-1].style.display = "block";  
     setTimeout(carousel, 5000); 
    }


//   Quotes
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote')
const  loader = document.getElementById('loader');

let apiQuotes = [];

//  Show Loading 
function loading (){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//  Hide Loading 
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new Quote Function
function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length
    if (quote.text.length > 120) {
        quoteText.classList.add('long_quote')
    } else {
        quoteText.classList.remove('long_quote');
    }
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes from APi Function
async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}
// Tweet Quote
    function tweetQuote() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
        window.open(twitterUrl, '_blank');
    }
    newQuoteBtn.addEventListener('click', newQuote);
    twitterBtn.addEventListener('click', tweetQuote);
// On Load
   getQuotes();

