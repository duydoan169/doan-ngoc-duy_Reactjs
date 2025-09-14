class Book{
    private title: string;
    private author: string;
    constructor(title: string, author: string){
        this.author=author;
        this.title=title;
    }
    get getTitle(){
        return this.title;
    }
    get getAuthor(){
        return this.author;
    }
}
class Library{
    books: Book[]=[];

    addBook(book: Book){
        this.books.push(book);
    }
    printBooks(){
        this.books.forEach(book => {
            console.log(`Title: ${book.getTitle}, Author: ${book.getAuthor}`);
        });
    }
}
let book1= new Book("book1 title", "book1 author");
let book2= new Book("book2 title", "book2 author");
let book3= new Book("book3 title", "book3 author");
let book4= new Book("book4 title", "book4 author");
let book5= new Book("book5 title", "book5 author");
let library= new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBooks();