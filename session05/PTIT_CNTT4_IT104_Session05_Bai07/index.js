var Book = /** @class */ (function () {
    function Book(title, author) {
        this.id = 1;
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
    Object.defineProperty(Book.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setTitle", {
        set: function (title) {
            this.title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setAuthor", {
        set: function (author) {
            this.author = author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setId", {
        set: function (id) {
            this.id = id;
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
        book.setId = this.books.length == 0 ? 1 : this.books[this.books.length - 1].getId + 1;
        this.books.push(book);
    };
    Library.prototype.printBooks = function () {
        this.books.forEach(function (book) {
            console.log("Id: ".concat(book.getId, ", Title: ").concat(book.getTitle, ", Author: ").concat(book.getAuthor));
        });
    };
    Library.prototype.updateBook = function (id, title, author) {
        var found = this.books.findIndex(function (book) { return book.getId == id; });
        if (found != -1) {
            this.books[found].setAuthor = author;
            this.books[found].setTitle = title;
        }
        else {
            console.log("Id khong ton tai");
        }
    };
    return Library;
}());
var book1 = new Book("book1 title", "book1 author");
var book2 = new Book("book2 title", "book2 author");
var book3 = new Book("book3 title", "book3 author");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.printBooks();
library.updateBook(1, "booooook", "author");
library.updateBook(6, "book6 title", "book6 author");
library.printBooks();
