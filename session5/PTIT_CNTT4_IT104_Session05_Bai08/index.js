"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author) {
        this.id = 1;
        this.author = author;
        this.title = title;
    }
    get getTitle() {
        return this.title;
    }
    get getAuthor() {
        return this.author;
    }
    get getId() {
        return this.id;
    }
    set setTitle(title) {
        this.title = title;
    }
    set setAuthor(author) {
        this.author = author;
    }
    set setId(id) {
        this.id = id;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.setId = this.books.length == 0 ? 1 : this.books[this.books.length - 1].getId + 1;
        this.books.push(book);
    }
    printBooks() {
        this.books.forEach(book => {
            console.log(`Id: ${book.getId}, Title: ${book.getTitle}, Author: ${book.getAuthor}`);
        });
    }
    updateBook(id, title, author) {
        let found = this.books.findIndex(book => book.getId == id);
        if (found != -1) {
            this.books[found].setAuthor = author;
            this.books[found].setTitle = title;
        }
        else {
            console.log("Id khong ton tai");
        }
    }
    searchByName(search) {
        let foundArr = this.books.filter(book => book.getTitle.toLowerCase().includes(search.toLowerCase()));
        for (let book of foundArr) {
            console.log(`Id: ${book.getId}, Title: ${book.getTitle}, Author: ${book.getAuthor}`);
        }
    }
}
let book1 = new Book("book1 title", "book1 author");
let book2 = new Book("book2 title", "book2 author");
let book3 = new Book("book3 title", "book3 author");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.searchByName("2");
