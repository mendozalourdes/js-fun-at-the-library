//This is another option to do the same thing as the first function
// function shelfBook(title, shelf) {
//   shelf.unshift(title)
// if (shelf.length === 4) {
//   shelf.shift(title)
//   }
// };



function shelfBook(title, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(title);
  }
};



function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length ; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1)
    };
  }
};


function listTitles(shelf) {
  var shelfTitles = [];
  for (var i = 0; i < shelf.length ; i++) {
    shelfTitles.push(shelf[i].title);
  }
  shelfTitles.join(", ");
  return shelfTitles.join(", ")

};



function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length ; i++) {
    if (title === shelf[i].title) {
      return true;
    }
  }
    return false
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
