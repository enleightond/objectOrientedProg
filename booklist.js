
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
	this.lastBook    = null; // the book we just read
	this.currentBook = null; //the book we're reading
	this.nextBook    = null; //next book in our list 
	this.allBooks    = []; // an array of all the books
};

//method of adding a book to booklist
Booklist.prototype.add = function (addbook) {
	//put the book on the bookshelf
	this.allBooks.push(addbook);
	//increment the number of books read
	this.bookRead += 1;
	//increment the number of books that have not been read
	this.bookNotRead += 1;
//this.currentBook = Book[0]
	//this.nextBook = 
};	

Booklist.prototype.finishCurrentBook = function() {
	for (var i=0; i < this.allBooks.length; i ++) {
		this.currentBook
	} 
			Book  = currentBook;
	this.nextBook = currentBook;
	this.currentBook = lastBook;
	this.lastBook();
	this.readDate = Date(Date.now());
};
 
//////////////     DRIVER CODE   ///////////
//create a new booklist
//new booklist
var blist1 = new Booklist();
//create a few books
var b1 = new Book ("see lad run","K-2","the Joker", false);
var b2 = new Book ("hop on pop", "3rd", "Dr. Suess", true);
var b3 = new Book ("Anarchists Cookbook", "experimental", "Unknown", false);

//add books to booklist
blist1.add(b1);
blist1.add(b2);
blist1.add(b3);


//test: did books not read increment and are book being added to 
// the booklist?


console.log(blist1);


