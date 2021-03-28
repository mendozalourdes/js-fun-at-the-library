
function createTitle(title) {
  return `The ${title}`
};



function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
};


function saveReview(text, array) {
  var repeats = false
  for (var i = 0; i < array.length; i++) {
    if (array[i] === text) {
      repeats = true
    }
  }
  if (repeats === false) {
    array.push(text)
  }
};


function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount
};


function writeBook(title, character, genre) {
  var bookObject = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return bookObject;
};

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}







module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
