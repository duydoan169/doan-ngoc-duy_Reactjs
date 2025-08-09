var Book = /** @class */ (function () {
    function Book(title, author) {
        this.author = author;
        this.title = title;
    }
    Object.defineProperty(Book.prototype, "getTitle", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getAuthor", {
        get: function () {
            return this.author;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.printBooks = function () {
        this.books.forEach(function (book) {
            console.log("Title: ".concat(book.getTitle, ", Author: ").concat(book.getAuthor));
        });
    };
    return Library;
}());
var book1 = new Book("book1 title", "book1 author");
var book2 = new Book("book2 title", "book2 author");
var book3 = new Book("book3 title", "book3 author");
var book4 = new Book("book4 title", "book4 author");
var book5 = new Book("book5 title", "book5 author");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBooks();
