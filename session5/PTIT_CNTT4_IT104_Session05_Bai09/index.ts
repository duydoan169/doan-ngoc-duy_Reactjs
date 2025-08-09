class Book{
    private title: string;
    private author: string;
    private id: number=1;
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
    get getId(){
        return this.id;
    }
    set setTitle(title: string){
        this.title=title;
    }
    set setAuthor(author: string){
        this.author=author;
    }
    set setId(id: number){
        this.id=id;
    }
}
class Library{
    books: Book[]=[];

    addBook(book: Book){
        book.setId=this.books.length==0 ? 1 : this.books[this.books.length-1].getId+1;
        this.books.push(book);
    }
    printBooks(){
        this.books.forEach(book => {
            console.log(`Id: ${book.getId}, Title: ${book.getTitle}, Author: ${book.getAuthor}`);
        });
    }
    updateBook(id: number, title: string, author: string){
        let found=this.books.findIndex(book => book.getId==id);
        if(found!=-1){
            this.books[found].setAuthor=author;
            this.books[found].setTitle=title;
        }else{
            console.log("Id khong ton tai");
        }
    }
    searchByName(search: string){
        let foundArr=this.books.filter(book => book.getTitle.toLowerCase().includes(search.toLowerCase()));
        for (let book of foundArr) {
            console.log(`Id: ${book.getId}, Title: ${book.getTitle}, Author: ${book.getAuthor}`);
        }
    }
    deleteBook(id: number){
        let deleteIndex=-1;
        this.books.forEach((book, index) => book.getId==id ? deleteIndex=index : deleteIndex);
        if(deleteIndex==-1){
            console.log("Id khong ton tai");
            return;
        }
        this.books.splice(deleteIndex, 1);
    }
}
let book1= new Book("book1 title", "book1 author");
let book2= new Book("book2 title", "book2 author");
let book3= new Book("book3 title", "book3 author");
let library= new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.deleteBook(2);
library.printBooks();