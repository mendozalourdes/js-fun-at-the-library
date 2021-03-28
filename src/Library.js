
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

//This function isn't working yet.
// Need to figure out a way that will run the fuction again, and update the arrays
//after the function has run once. Terminal shows that the second function
//didn't run since the true crime book is still there.
function checkoutBook(library, bookName, genre) {
for (var i = 0; i <library.shelves.length ; i++) {
  if (genre === library.shelves.genre && bookName === library.shelves.title) {
    library.shelves.splice(i, 1)
      }
      return library.shelves
  }   return `You have now checked out ${bookName} from the ${library.name[i]}`
};




















module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
