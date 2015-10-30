
//new book class
var Book = function (ti, ge, au, r, rd) {
	this.titles = ti; // string title of the book
	this.genre = ge; // string genre of the book
	this.author = au; // string author of the book
	this.read = r; // boolean of whether or not it's read
	this.readDate = rd; // object of the date it was read
};

//new booklists class
var Booklist = function() {
	this.bookRead    = 0;//number of books that have been read
	this.bookNotRead = 0; //number of books not read
	this.nextBook    = null; //next book in our list 
	this.currentBook = null; //the book we're reading
	this.lastBook    = null; // the book we just read
	this.allBooks    = []; // an array of all the books
};

//method of adding a book to booklist
Booklist.prototype.add = function (addbook) {
	//put the book on the bookshelf
	this.allBooks.push(addbook);

	//increment the number of books that have not been read
	this.bookNotRead += 1;
};	

Booklist.prototype.finishCurrentBook = function() {
	Book = currentBook;
	this.lastBook = bookRead;
	this.currentBook = nextBook;
	this.nextBook = bookNotRead;
	this.readDate = Date(Date.now());

};
 
//////////////     DRIVER CODE   ///////////
//create a new booklist
//new booklist
new Booklist ();
//create a few books
new Book ("see lad run","K-2","the Joker", false, Date (new Date))
new Book ("hop on pop", "3rd", "Dr. Suess", true, Date (new Date))
new Book ("Anarchists Cookbook", "experimental", "Unknown", false, Date (new Date))
//add books to the booklist
// var bookArray = [b1,b2,b3];



//test: did books not read increment and are book being added to 
// the booklist?


console.log(allBooks.length);


