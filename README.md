# PHASE-1 PROJECT

This is the project for the end of phase one where we learned JavaScript language.

#### 12/04/2024

#### By Tabitha Akinyi Okoth

## introduction

This is a JavaScript code for a web page that allows users to generate random quotes from the Game of Thrones series, the character who said the quote and their house. The user can also share them on Instagram, and save their favorites locally.


## Description

### i. DOM Elements References

The code regains references to various DOM elements using the event listener document.getElementById , which is activated by the following button:

-generateQuoteButton: The button that triggers fetching a new quote.

-quoteText: The element displaying the fetched quote.
characterName: The element displaying the character's name and house.

-saveButton: The button for saving the quote (covered later).
houseName: The element displaying the character's house name 
(presumably populated later).


### ii. Fetching Character House (Assuming Elsewhere):

The code contains a function fetchcharacterHouse(characterId), which:

-Takes a characterId as input.
Constructs a URL to fetch the character's house information from the game of thrones API url.

-Fetches data  from the url using fetch function.

-Handles errors using .catch().

-Processes the response and returns the character's house name using .then().

### iii. Sharing Quote on Instagram:

The shareButton has an event listener attached to it. When clicked:

-The default behavior (e.preventDefault()) is prevented to avoid potential page reloads.

-The current quote and character information are retrieved from the DOM elements.

-An Instagram URL is constructed using encodeURIComponent to properly encode the quote and character details for the URL.
The URL opens in a new tab using window.open(instagramUrl, "_blank").

### iv. Saving Quote (Local Storage):

There's a saveButton with an event listener attached to it. When clicked:

-The default behavior (e.preventDefault()) is prevented to prevent accidental submission.

-The quote, character name, and house name are retrieved from the url data.

-These values are saved to local storage using localStorage.setItem with the keys:

    i. localStorage.setItem("savedQuote", quote);
   ii. localStorage.setItem("savedCharacter", characterName);
  iii. localStorage.setItem("savedHouse", houseName.      textContent); (assuming houseName is updated elsewhere)
  iv. A success message is logged to the console.

  ## Dependencies:

The code relies on the Game of Thrones Quotes API (https://gameofthronesquotes.xyz/) to fetching quotes.

An additional API (e.g., https://api.example.com/characters/${characterId}) is needed for retrieving character house information from the game of thrones API.


## Installation

    1. Include relevant JavaScript libraries for fetch (if  they are not inherently supported) and any DOM manipulation utilities you might use.

    2. Update the base URL (baseURL) variable at the beginning of the code to point to your desired Game of Thrones Quotes API endpoint.

    3.Ensure the HTML structure contains elements with these IDs:

    -generate-quote: a Button that triggers quote generation.

    -quote:  an Element that displays the fetched quote.

    -character-name:an Element that displays the character's name and house.

    -share-button: a Button that shares the quote on Instagram.

    -save-button: a Button that saves the quote locally.

    -If you're using a different API for character house information, update the fetchcharacterHouse function accordingly.

## Usage

    -Include the JavaScript code in your HTML page.

    -The page should display a button for generating quotes, a section for displaying the quote and character information, buttons for sharing and saving, and potentially an area to show the character's house name.

    -Clicking the "Generate Quote" button fetches a random quote and updates the page.

    -Clicking the "Share" button creates an Instagram URL with the current quote and character details.

    -Clicking the "Save" button saves the quote and character information to local storage.

## Contributing option

You can feel free to fork the code and make modifications to suit your needs. Any pull requests with improvements or bug fixes are welcome!

## Technologies used

1. HTML
2. Github
3. Javascript







