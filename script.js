const quote = document.querySelector(".quote-app h3");
const quoteAuthor = document.querySelector(".quote-app p");
const quoteButton = document.querySelector(".new-quote");
const twitterButton = document.querySelector(".twitter");

const request = new Request("https://api.api-ninjas.com/v1/quotes?category=happiness", {
    method: 'GET',
    headers: { 'X-Api-Key': 'ENTER API KEY'},
    contentType: 'image/jpg',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

async function getQuote() {
    let x = await fetch(request);
    console.log(x);
    let y = await x.json();

    console.log(y[0])
    quote.innerHTML = `"${y[0].quote}"`;
    quoteAuthor.innerHTML = `${y[0].author}`
}

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}`, "Tweet Window", "width= 500, height=300");
}

getQuote()

quoteButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", tweet)