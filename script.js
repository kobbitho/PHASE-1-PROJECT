 //Initialize quote fetching and sharing functionality
document.addEventListener("DOMContentLoaded", function () {
   //Set the base URL for the quote API
    baseURL ="https://api.gameofthronesquotes.xyz/v1/random"

   // Get references to the DOM elements
  const generateQuoteButton = document.getElementById("generate-quote");
  const quoteText = document.getElementById("quote");
  const characterName = document.getElementById("character-name");
  const saveButton = document.getElementById("saveButton"); // this is the reference for save button
  const houseName = document.getElementById("house-name");

    //Add a click event listener to the generate quote button
  generateQuoteButton.addEventListener("click", function () {
    // Define the function to fetch the quote from the API

    fetch("https://api.gameofthronesquotes.xyz/v1/random")

    //Fetches a random quote from the API and updates the quote text and character name on the page.
     // @returns a promise that resolves when the quote has been successfully fetched and displayed.
     
      .then(response => response.json())
      .then(data => {
        quoteText.innerHTML = data.sentence;
        characterName.innerHTML = `${data.character.name} (${data.character.house.name}).`;
      })
      .catch(error => {
        console.error("Error fetching quote", error);
      });
  });

  
  //Assuming the submitCommentButton is defined elsewhere in the HTML
  function fetchcharacterHouse(characterId) {
    const url = `https://api.example.com/characters/${characterId}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        return data.house;
      })
      .catch(error => {
        console.error(`Error fetching character's house: ${error.message}`);
      });
  }

  //Add a click event listener to the share button
  const shareButton = document.getElementById("share-button");

  shareButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the current quote and character
    const quote = quoteText.innerHTML;

    const instagramUrl = `https://www.instagram.com/?caption=${encodeURIComponent(quote + " - " + characterName.innerHTML + " " + houseName.innerHTML)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(instagramUrl, "_blank");
  });


  saveButton.addEventListener("click", function (e) {
    e.preventDefault();

    //saveButton.addEventListener("click", saveQuote);

    // Save the quote to local storage
    localStorage.setItem("savedQuote", quote);
    localStorage.setItem("savedCharacter", characterName);
    localStorage.setItem("savedHouse", houseName.textContent);

    console.log("Quote saved successfully!");
  });
  
});  

  