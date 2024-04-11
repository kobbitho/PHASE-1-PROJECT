document.addEventListener("DOMContentLoaded", function () {

    baseURL ="https://api.gameofthronesquotes.xyz/v1/random"

  const generateQuoteButton = document.getElementById("generate-quote");
  const quoteText = document.getElementById("quote");
  const characterName = document.getElementById("character-name");
  const likeIcon = document.getElementById("like-icon");
  const saveButton = document.getElementById("saveButton"); // this is the reference for save button
  const houseName = document.getElementById("house-name")

  let  likeCount =0; //variable to store current number of likes
  likeCount.addEventListener("click", function() {
    likeCount = likeCount ++; //incre
    likeIcon.innerHTML = likeCount;
  
  document.getElementById("like-count").innerHTML = likeCount});


  generateQuoteButton.addEventListener("click", function () {
    fetch("https://api.gameofthronesquotes.xyz/v1/random")
      .then(response => response.json())
      .then(data => {
        quoteText.innerHTML = data.sentence;
        characterName.innerHTML = `${data.character.name} (${data.character.house.name})`;
        
      
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

    
    // Save the quote to local storage
    localStorage.setItem("savedQuote", quote);
    localStorage.setItem("savedCharacter", characterName);
    localStorage.setItem("savedHouse", houseName.textContent);

    console.log("Quote saved successfully!");
  });  
  
});
