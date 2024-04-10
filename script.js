document.addEventListener("DOMContentLoaded", function () {

    url ="https://api.gameofthronesquotes.xyz/v1/random"

  const generateQuoteButton = document.getElementById("generate-quote");
  const quoteText = document.getElementById("quote");
  const characterText = document.getElementById("character");
  const likeIcon = document.getElementById("like-icon");
  const commentTextarea = document.getElementById("comment"); //Reference for commentTextarea
  const saveButton = document.getElementById("saveButton"); // this is the reference for save button
  

  generateQuoteButton.addEventListener("click", function () {
    fetch("https://api.gameofthronesquotes.xyz/v1/random")
      .then(response => response.json())
      .then(data => {
        quoteText.innerHTML = data.sentence;
        characterText.innerHTML = `${data.character}`;

      })
      .catch(error => {
        console.error("Error fetching quote", error);

      });
  });
  
  //Assuming the submitCommentButton is defined elsewhere in the HTML
  const submitCommentButton = document.getElementById("submit-coment");
  submitCommentButton.addEventListener("click", function (e) {
    e.preventDefault();
    let comment = document.querySelector("#comment").value;

    // Assuming the API endpoint for submitting comments is "/comments"
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => {
        if (response.ok) {
          // Assuming the API returns a success message and the comment ID
          console.log('Comment submitted successfully');
        } else {
          console.log('Failed to submit comment');
        }
    })
        .catch(error => {
          console.error("Error.message", error);
        });


    // Clear the comment textarea
    document.querySelector("#comment").value = "";
  });



  const shareButton = document.getElementById("share-button");

  shareButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the current quote and character
    const quote = quoteText.innerHTML;
    const character = characterText.innerHTML;

    // Create a new window or tab with the quote and character
    const url = `https://www.example.com/share?quote=${encodeURIComponent(quote)}&character=${encodeURIComponent(character)}`;
    window.open(url, "_blank");
  });
  saveButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the current quote and character
    const quote = quoteText.innerHTML;
    const character = characterText.innerHTML;

    // Save the quote to local storage
    localStorage.setItem("savedQuote", quote);
    localStorage.setItem("savedCharacter", character);

    console.log("Quote saved successfully!");
  });  
  
});








  


