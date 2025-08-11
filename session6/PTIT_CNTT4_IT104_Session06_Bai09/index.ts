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
    registerMember(id: number, name: string, contact: string, lendedBooks: Book[], status: string){
        let newMember=new Member(id, name, contact, lendedBooks, status);
        this.members.push(newMember);
    }
    blockMember(id: number, newStatus: string){
        let found=this.members.findIndex(member => member.id==id);
        if(found==-1){
            console.log("Id khong ton tai");
            return;
        }
        this.members[found].status=newStatus;
    }
    showMembers(){
        if(this.members.length==0){
            console.log("khong co thanh vien");
            return;
        }
        for (let member of this.members) {
            console.log(`ID: ${member.id}, Name: ${member.name}, Contact: ${member.contact}, lendedBooks: ${member.lendedBooks}, Status: ${member.status}`);
        }
    }
}
let library= new Library([], []);
library.registerMember(1, "duy", "0987654321", [], "dang hoat dong");
library.showMembers();
library.blockMember(1, "da bi khoa");
library.showMembers();