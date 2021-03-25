// book.js
//   createTitle
//     ✓ should be a function
//     ✓ should take in a title and return a modified title
//     ✓ should be able to create many modified titles
//   buildMainCharacter
//     - should be a function (comment the function back into the module.exports object in book.js)
//     - should create a character object
//


function createTitle() {
  var bookIdea = "Storm's Awakening";

  return `The ${bookIdea}`
}

var sushiTitle = "Dancing Sushi";
var dragonTitle = "Dragon in the Summer";
var ghostTitle = "Teenage Ghoul";

function createTitle(book) {
  return `The ${book}`
}


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
};



module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
