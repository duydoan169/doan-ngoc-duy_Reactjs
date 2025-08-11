"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author, stock) {
        this.id = id;
        this.author = author;
        this.stock = stock;
        this.title = title;
        this.status = stock > 0 ? "dang con hang" : "da het hang";
    }
}
class Member {
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.name = name;
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.bookId = bookId;
        this.dueDate = dueDate;
        this.memberId = memberId;
    }
}
class Library {
    constructor(books, members) {
        this.books = books;
        this.members = members;
    }
    addBooks(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length == 0) {
            console.log("khong co sach");
            return;
        }
        for (let book of this.books) {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author} , Stock: ${book.stock}, Status: ${book.status}`);
        }
    }
    registerMember(id, name, contact, lendedBooks, status) {
        let newMember = new Member(id, name, contact, lendedBooks, status);
        this.members.push(newMember);
    }
    blockMember(id, newStatus) {
        let found = this.members.findIndex(member => member.id == id);
        if (found == -1) {
            console.log("Id khong ton tai");
            return;
        }
        this.members[found].status = newStatus;
    }
    showMembers() {
        if (this.members.length == 0) {
            console.log("khong co thanh vien");
            return;
        }
        for (let member of this.members) {
            console.log(`ID: ${member.id}, Name: ${member.name}, Contact: ${member.contact}, lendedBooks: ${member.lendedBooks}, Status: ${member.status}`);
        }
    }
}
let library = new Library([], []);
library.registerMember(1, "duy", "0987654321", [], "dang hoat dong");
library.showMembers();
library.blockMember(1, "da bi khoa");
library.showMembers();
