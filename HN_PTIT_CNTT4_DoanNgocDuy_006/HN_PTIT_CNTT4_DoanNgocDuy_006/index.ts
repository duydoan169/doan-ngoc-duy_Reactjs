class Audience{
    static currentId=1;
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(name: string, email: string, phone: string){
        this.id=Audience.currentId++;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
    getDetail(){
        console.log(`Id: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    }
}

abstract class Movie{
    static currentId=1;
    id: number;
    title: string;
    abstract genre: string;
    ticketPrice: number;
    isShowing: boolean=true;

    constructor(title: string, ticketPrice: number){
        this.id=Movie.currentId++;
        this.title=title;
        this.ticketPrice=ticketPrice;
    }
    startShow(){
        this.isShowing=true;
    }
    stopShow(){
        this.isShowing=false;
    }
    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;
}

class ActionMovie extends Movie{
    genre: string="action";
    getSpecialOffers(): string[] {
        return ["mien phi bap rang", "tang poster"];
    }
    getMovieInfo(): string {
        return `Id: ${this.id}, Title: ${this.title}, Genre: ${this.genre}, TicketPrice: ${this.ticketPrice}, IsShowing: ${this.isShowing}, Description: phim hanh dong gay can, ky xao hoanh trang`;
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice*quantity;
    }
}
class ComedyMovie extends Movie{
    genre: string="comedy";
    getSpecialOffers(): string[] {
        return ["giam 10% cho nhom tren 4 nguoi"];
    }
    getMovieInfo(): string {
        return `Id: ${this.id}, Title: ${this.title}, Genre: ${this.genre}, TicketPrice: ${this.ticketPrice}, IsShowing: ${this.isShowing}, Description: phim hai nhe nhang, vui nhon`;
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice*quantity;
    }
}
class AnimationMovie extends Movie{
    genre: string="animation";
    getSpecialOffers(): string[] {
        return ["giam gia cho tre em duoi 12 tuoi"];
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice*quantity;
    }
    getMovieInfo(): string {
        return `Id: ${this.id}, Title: ${this.title}, Genre: ${this.genre}, TicketPrice: ${this.ticketPrice}, IsShowing: ${this.isShowing}, Description: phim hoat hinh voi hinh anh song dong`;    
    }
}
class TicketBooking{
    static currentId=1;
    bookingId: number;
    audience: Audience;
    movie: Movie;
    quantity: number;
    totalPrice: number;

    constructor(audience: Audience, movie: Movie, quantity: number){
        this.bookingId=TicketBooking.currentId++;
        this.audience=audience;
        this.movie=movie;
        this.quantity=quantity;
        this.totalPrice=this.movie.calculateTicketCost(this.quantity);
    }
    getDetails(){
        console.log(`bookingId: ${this.bookingId}, Audience: ${this.audience.name}, Movie: ${this.movie.title}, Quantity: ${this.quantity}, TotalPrice: ${this.totalPrice}`);
    }
}
class Cinema{
    movies: Movie[]=[];
    audiences: Audience[]=[];
    bookings: TicketBooking[]=[];

    addMovie(movie: Movie){
        this.movies.push(movie);
    }
    addAudience(name: string, email: string, phone: string){
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
    }
    bookingTickets(audienceId: number, movieId: number, quantity: number){
        let audience=this.audiences.find(audience => audience.id==audienceId);
        if(!audience){
            console.log("Id khan gia khong ton tai");
            return;
        }
        let movie=this.movies.find(movie => movie.id=movieId);
        if(!movie){
            console.log("Id phim khong ton tai");
            return;
        }
        let newBooking = new TicketBooking(audience, movie, quantity);
        this.bookings.push(newBooking);
    }
    cancelMovie(movieId: number){
        let movie=this.movies.find(movie => movie.id==movieId);
        if(!movie){
            console.log("Id phim khong ton tai");
            return;
        }
        movie.isShowing=false;
    }
    listShowingMovie(){
        let showingMovies=this.movies.filter(movie => movie.isShowing == true);
        if(showingMovies.length==0){
            console.log("khong co phm dang chieu");
            return;
        }
        for (let movie of showingMovies) {
            console.log(movie.getMovieInfo());
        }
    }
    listAudienceBooking(audienceId: number){
        let audienceBookings=this.bookings.filter(booking => booking.audience.id=audienceId);
        if(audienceBookings.length==0){
            console.log("Khach hang khong co don dat ve");
            return;
        }
        for (let booking of audienceBookings) {
            booking.getDetails();
        }
    }
    calculateTotalRevenue(){
        return this.bookings.reduce((sum, current) => sum+current.totalPrice, 0);
    }
    getMovieGenreCount(){
        let comedyCount=this.movies.reduce((sum, current) => current.genre=="comedy" ? sum+1 : sum, 0);
        let actionCount=this.movies.reduce((sum, current) => current.genre=="action" ? sum+1 : sum, 0);
        let animationCount=this.movies.reduce((sum, current) => current.genre=="animation" ? sum+1 : sum, 0);
        console.log(`phim hanh dong: ${actionCount} phim`);
        console.log(`phim hai: ${comedyCount} phim`);
        console.log(`phim hoat hinh: ${animationCount} phim`);
    }
    getMovieSpecialOffers(movieId: number){
        let movie=this.movies.find(movie => movie.id=movieId);
        if(!movie){
            console.log("Id phim khong ton tai");
            return;
        }
        console.log(movie.getSpecialOffers());
    }
    findMovieById(collection: Movie[], id: number){
        let movie=collection.find(movie => movie.id==id);
        if(!movie){
            console.log("Id khong ton tai");
            return;
        }
        console.log(movie.getMovieInfo());
    }
    findAudienceById(collection: Audience[], id: number){
        let audience=collection.find(audience => audience.id==id);
        if(!audience){
            console.log("Id khong ton tai");
            return;
        }
        audience.getDetail();
    }
    findTicketBookingById(collection: TicketBooking[], id: number){
        let ticketBook=collection.find(ticketBook => ticketBook.bookingId==id);
        if(!ticketBook){
            console.log("Id khong ton tai");
            return;
        }
        ticketBook.getDetails();
    }
}

let n;
let cinema=new Cinema();
do{
    n=prompt(`
        1. Them khan gia moi
        2. Them phim moi
        3. Dat ve
        4. Ngung chieu phim
        5. Hien thi danh sach phim dang chieu
        6. Hien thi cac dat ve cua mot khan gia
        7. Hien thi tong doanh thu
        8. Dem so luong tung the loai
        9. Tim kiem thong tin
        10. Hien thi uu dai
        11. thoat chuong trinh`);
    
    if(n==null){
        n=0;
    }else{
        n=Number(n);
    }

    switch(n){
        case 1: 
            let audienceName=prompt("nhap ten khan gia");
            if(audienceName==null){
                console.log("khong hop le");
                break;
            }
            let audienceEmail=prompt("nhap email khan gia");
            if(audienceEmail==null){
                console.log("khong hop le");
                break;
            }
            let audiencePhone=prompt("nhap sdt khan gia");
            if(audiencePhone==null){
                console.log("khong hop le");
                break;
            }
            cinema.addAudience(audienceName, audienceEmail, audiencePhone);
            console.log("them khan gia thanh cong");
            break;
        case 2: 
            let movieTitle=prompt("nhap ten phim muon them: ");
            if(movieTitle==null){
                console.log("khong hop le");
                break;
            }
            let moviePrice=prompt("nhap gia ve phim muon them: ");
            if(moviePrice==null || +moviePrice<0){
                console.log("khong hop le");
                break;
            }
            let movieGenre=prompt(`
                nhap the loai phim muon them: 
                actionMovie(A) comedyMovie(B) animationMovie(C)`);
            if(movieGenre==null || movieGenre!="A" && movieGenre!="B" && movieGenre!="C"){
                console.log("khong hop le");
                break;
            }
            let newMovie;
            if(movieGenre=="A"){
                newMovie=new ActionMovie(movieTitle, +moviePrice);
            }else if(movieGenre=="B"){
                newMovie=new ComedyMovie(movieTitle, +moviePrice);
            }else{
                newMovie= new AnimationMovie(movieTitle, +moviePrice);
            }
            cinema.addMovie(newMovie);
            console.log("them phim moi thanh cong");
            break;
        case 3: 
            let audienceId=prompt("nhap Id khan gia: ");
            if(audienceId==null){
                console.log("khong hop le");
                break;
            }
            let movieId=prompt("nhap Id phim: ");
            if(movieId==null){
                console.log("khong hop le");
                break;
            }
            let quantity=prompt("nhap so luong ve muon mua: ");
            if(quantity==null){
                console.log("khong hop le");
                break;
            }
            cinema.bookingTickets(+audienceId, +movieId, +quantity);
            console.log("them don dat ve moi thanh cong");
            break;
        case 4: 
            let cancelMovie=prompt("nhap Id phim muon ngung chieu");
            if(cancelMovie==null){
                console.log("khong hop le");
                break;
            }
            cinema.cancelMovie(+cancelMovie);
            console.log("ngung chieu phim thanh cong");
            break;
        case 5: 
            cinema.listShowingMovie();
            break;
        case 6: 
            audienceId=prompt("nhap Id khan gia muon tim dat ve");
            if(audienceId==null){
                console.log("khong hop le");
                break;
            }
            cinema.listAudienceBooking(+audienceId);
            break;
        case 7: 
            console.log(`Tong doanh thu: ${cinema.calculateTotalRevenue()}`);
            break;
        case 8: 
            cinema.getMovieGenreCount();
            break;
        case 9: 
            movieId=prompt("nhap Id phim muon tim");
            if(movieId==null){
                console.log("khong hop le");
                break;
            }
            cinema.findMovieById(cinema.movies, +movieId);
            break;
        case 10:
            let findOffers=prompt("nhap id phim muon tim uu dai: ");
            let findOffersReal;
            if(findOffers==null){
                console.log("khong hop le");
                break;
            }else{
                findOffersReal=Number(findOffers);
            }
            cinema.getMovieSpecialOffers(findOffersReal);
            break;
        case 11:
            console.log("da thoat chuong trinh");
            break;
        default:
            console.log("khong hop le");
            break
    }
}while(n!=11);