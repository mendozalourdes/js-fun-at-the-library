// createTitle
//   ✓ should be a function
//   - should take in a title and return a modified title
//   - should be able to create many modified titles



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

// it.skip("should be able to create many modified titles", function () {
//   var sushiTitle = createTitle("Dancing Sushi");
//   var dragonTitle = createTitle("Dragon in the Summer");
//   var ghostTitle = createTitle("Teenage Ghoul");
//
//   assert.equal(sushiTitle, "The Dancing Sushi");
//   assert.equal(dragonTitle, "The Dragon in the Summer");
//   assert.equal(ghostTitle, "The Teenage Ghoul");
// });
// });

module.exports = {
  createTitle,
  // buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
