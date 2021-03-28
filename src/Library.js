


//This function is supposed to create a function called createLibrary
//this function should be able to return an empty object with a
// property of name where the library's name will be in there as a string
// that should be prompted by calling the variable (like denverLibrary)
// which then pushes out an empty-ish object. This object will then have to add the
//parameter/argument into the array of library names into that object.
//I'm not sure how to get that object to be named the same as the the variable
//where it is supposed to begin.
//it's possible that the function will need to create individual functions for each
//variable that is called.



function createLibrary(libraryName) {
var library = {
    name: [libraryName],
    shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: [],
      }
    }
      return library
    };

//how should i make this more dynamic when adding new shelves?
function addBook(library, book) {
if (book.genre === "fantasy") {
  library.shelves.fantasy.push(book);
} else if (book.genre === "nonFiction") {
  library.shelves.nonFiction.push(book);
} else if (book.genre === "nonFiction") {
  library.shelves.fiction.push(book);
  }
};


function checkoutBook(library, bookName, genre) {

};

return `You have now checked out ${bookName} from the ${library}`





















module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
