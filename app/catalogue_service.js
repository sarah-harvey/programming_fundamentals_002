// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];
//is the reason npm test keeps saying 'function checkBook is not a function' because we need to break the array down into OOP e.g. title, author, quantity?
function checkBook(title) {
  if (!title) throw new Error("Please provide a title"); 
  let result = false;
//loop through the array until it finds the title then return true.
  for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue[i];
    //let titleAndAuthor = catalogue[i].toLowerCase();
    //let titleFound = titleAndAuthor.includes(title.toLowerCase());
    if (book.includes(title)) {
      result = true;
    }
  }

  return result;
}


  // for (let i = 0; i < catalogue.length; i++ ) {
  // 
  
  //   let titleAndAuthor = catalogue[i].toLowerCase();
  // //give back the title and author
  //   
  // //if title is found return true/false
  //   if(titleFound) {
  //     return true;
  //   } else {
  
  // return false;
 //}
//}
//}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  for (let i = 0; i < catalogue.length; i++) {
    const keyword = catalogue[i];
    if (bookTitle.toLowerCase().includes(title.toLowerCase())) {
        return true;
      }
  
    }
    if (book.includes(keyword)) {
        return //number of instances;
        } 
  }
  // countBooksByKeyword("The");
  // for (let i = 0; i < catalogue.length; i++) {
  //   const keyword = catalogue[i];
  //   if (catalogue.includes(keyword)) {
  //     return true;
  //   } else {
  //     return false;
 

function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  for (let key in catalogue) {
    const value = catalogue[key];
    [key]= value;

    return objectToReturn;
}
}

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
    //if quantity is over 0 then book is in stock
    if (title.quantity > 0) {
      return result;
    } else {
      return result;
    }
   //If the quantity is < 0 or 0, not in stock
    if (title.quantity <= 0) {
      return false;
    }
   
  }
function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  // if (title.quantity === 0) {
  //   return ("Not in Stock");
  // } else if (title.quantity >1 but <=5) {
  //   return ("Low Stock");
  // } else if (title.quantity >=6 but <=10) {
    switch(stockReview) {
      case(title.quantity === 0):
        text = "Not in Stock";
        break;
      
      case(title.quantity > 1 && <= 5):
        text = "Low Stock";
        break;
      
      case(title.quantity >=6 && <= 10):
        text = "Medium Stock";
        break;

      case(title.quantity >= 11):
        text = "High Stock";
    }  

}



module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
}