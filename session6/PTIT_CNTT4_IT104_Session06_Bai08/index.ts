class Book{
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number, title: string, author: string, stock: number){
        this.id=id;
        this.author=author;
        this.stock=stock;
        this.title=title;
        this.status= stock>0 ? "dang con hang" : "da het hang";
    }
}

class Member{
    id: number;
    name: string;
    contact: string;
    lendedBooks: Book[];
    status: string;

    constructor(id: number, name: string, contact: string, lendedBooks: Book[], status: string){
        this.id=id;
        this.contact=contact;
        this.lendedBooks=lendedBooks;
        this.name=name;
        this.status=status;
    }
}
class LendedBook{
    memberId: number;
    bookId: number;
    dueDate: string;

    constructor(memberId: number, bookId: number, dueDate: string){
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.memberId=memberId;
    }
}
class Library{
    books: Book[];
    members: Member[];

    constructor(books: Book[], members: Member[]){
        this.books=books;
        this.members=members;
    }
    addBooks(book: Book){
        this.books.push(book);
    }
    showBooks(){
        if(this.books.length==0){
            console.log("khong co sach");
            return;
        }
        for (let book of this.books) {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author} , Stock: ${book.stock}, Status: ${book.status}`);
        }
    }
}
let book1= new Book(1, "lap trinh stratch", "doan ngoc duy", 2);
let book2= new Book(2, "lap trinh javaScript", "john dcom", 0);
let library= new Library([], []);
library.addBooks(book1);
library.addBooks(book2);
library.showBooks();