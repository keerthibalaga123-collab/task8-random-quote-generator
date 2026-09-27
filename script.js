// Random Quote Generator
// Task 8 - Web Development Track

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },

    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },

    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },

    {
        quote: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },

    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },

    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },

    {
        quote: "Your limitation—it’s only your imagination.",
        author: "Unknown"
    },

    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    }
];


// Get HTML elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuoteBtn");
const shareButton = document.getElementById("shareBtn");


// Store the previous quote index
let previousIndex = -1;


// Function to generate a random quote
function generateQuote() {

    let randomIndex;

    // Prevent the same quote from appearing twice consecutively
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    // Get selected quote
    const selectedQuote = quotes[randomIndex];

    // Display quote
    quoteElement.textContent = `"${selectedQuote.quote}"`;

    // Display author
    authorElement.textContent = `— ${selectedQuote.author}`;
}


// Generate a new quote when button is clicked
newQuoteButton.addEventListener("click", generateQuote);


// Share quote using Web Share API
shareButton.addEventListener("click", async function () {

    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;

    const shareText = `${quoteText} ${authorText}`;

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Random Quote",
                text: shareText
            });

        } catch (error) {

            console.log("Sharing cancelled.");

        }

    } else {

        // Copy quote to clipboard if sharing is not supported
        try {

            await navigator.clipboard.writeText(shareText);

            alert("Quote copied to clipboard! 📋");

        } catch (error) {

            alert("Unable to share or copy the quote.");

        }
    }
});


// Display the first random quote when the page loads
generateQuote();