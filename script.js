// No changes required for light/dark mode removal 

const generateQuoteButton = document.getElementById("generate-quote");
const quoteText = document.getElementById("quote");
const characterText = document.getElementById("character");
const likeButton = document.getElementById("like-quote");
const likeIcon = document.getElementById("like-icon");
const commentTextarea = document.getElementById("comment");
const submitCommentButton = document.getElementById("submit-comment");
const authorElement = document.getElementById("author");  // Reference for author element

let isLiked = false; // Flag to track like state

generateQuoteButton.addEventListener("click", function() {
  fetch("https://api.gameofthronesquotes.xyz/v1/random")
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.sentence;
      characterText.textContent = `- ${data.character}`;
      authorElement.textContent = data.author ? `(by ${data.author})` : ""; // Conditionally display author information
    })
    .catch(error => console.error(error));
});

// ... existing like button and comment functionality logic ...
