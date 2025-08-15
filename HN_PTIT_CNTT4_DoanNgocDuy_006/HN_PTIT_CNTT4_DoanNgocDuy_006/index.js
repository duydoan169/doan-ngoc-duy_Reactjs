var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Audience = /** @class */ (function () {
    function Audience(name, email, phone) {
        this.id = Audience.currentId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Audience.prototype.getDetail = function () {
        console.log("Id: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, ", Phone: ").concat(this.phone));
    };
    Audience.currentId = 1;
    return Audience;
}());
var Movie = /** @class */ (function () {
    function Movie(title, ticketPrice) {
        this.isShowing = true;
        this.id = Movie.currentId++;
        this.title = title;
        this.ticketPrice = ticketPrice;
    }
    Movie.prototype.startShow = function () {
        this.isShowing = true;
    };
    Movie.prototype.stopShow = function () {
        this.isShowing = false;
    };
    Movie.currentId = 1;
    return Movie;
}());
var ActionMovie = /** @class */ (function (_super) {
    __extends(ActionMovie, _super);
    function ActionMovie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genre = "action";
        return _this;
    }
    ActionMovie.prototype.getSpecialOffers = function () {
        return ["mien phi bap rang", "tang poster"];
    };
    ActionMovie.prototype.getMovieInfo = function () {
        return "Id: ".concat(this.id, ", Title: ").concat(this.title, ", Genre: ").concat(this.genre, ", TicketPrice: ").concat(this.ticketPrice, ", IsShowing: ").concat(this.isShowing, ", Description: phim hanh dong gay can, ky xao hoanh trang");
    };
    ActionMovie.prototype.calculateTicketCost = function (quantity) {
        return this.ticketPrice * quantity;
    };
    return ActionMovie;
}(Movie));
var ComedyMovie = /** @class */ (function (_super) {
    __extends(ComedyMovie, _super);
    function ComedyMovie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genre = "comedy";
        return _this;
    }
    ComedyMovie.prototype.getSpecialOffers = function () {
        return ["giam 10% cho nhom tren 4 nguoi"];
    };
    ComedyMovie.prototype.getMovieInfo = function () {
        return "Id: ".concat(this.id, ", Title: ").concat(this.title, ", Genre: ").concat(this.genre, ", TicketPrice: ").concat(this.ticketPrice, ", IsShowing: ").concat(this.isShowing, ", Description: phim hai nhe nhang, vui nhon");
    };
    ComedyMovie.prototype.calculateTicketCost = function (quantity) {
        return this.ticketPrice * quantity;
    };
    return ComedyMovie;
}(Movie));
var AnimationMovie = /** @class */ (function (_super) {
    __extends(AnimationMovie, _super);
    function AnimationMovie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genre = "animation";
        return _this;
    }
    AnimationMovie.prototype.getSpecialOffers = function () {
        return ["giam gia cho tre em duoi 12 tuoi"];
    };
    AnimationMovie.prototype.calculateTicketCost = function (quantity) {
        return this.ticketPrice * quantity;
    };
    AnimationMovie.prototype.getMovieInfo = function () {
        return "Id: ".concat(this.id, ", Title: ").concat(this.title, ", Genre: ").concat(this.genre, ", TicketPrice: ").concat(this.ticketPrice, ", IsShowing: ").concat(this.isShowing, ", Description: phim hoat hinh voi hinh anh song dong");
    };
    return AnimationMovie;
}(Movie));
var TicketBooking = /** @class */ (function () {
    function TicketBooking(audience, movie, quantity) {
        this.bookingId = TicketBooking.currentId++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = this.movie.calculateTicketCost(this.quantity);
    }
    TicketBooking.prototype.getDetails = function () {
        console.log("bookingId: ".concat(this.bookingId, ", Audience: ").concat(this.audience.name, ", Movie: ").concat(this.movie.title, ", Quantity: ").concat(this.quantity, ", TotalPrice: ").concat(this.totalPrice));
    };
    TicketBooking.currentId = 1;
    return TicketBooking;
}());
var Cinema = /** @class */ (function () {
    function Cinema() {
        this.movies = [];
        this.audiences = [];
        this.bookings = [];
    }
    Cinema.prototype.addMovie = function (movie) {
        this.movies.push(movie);
    };
    Cinema.prototype.addAudience = function (name, email, phone) {
        var newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
    };
    Cinema.prototype.bookingTickets = function (audienceId, movieId, quantity) {
        var audience = this.audiences.find(function (audience) { return audience.id == audienceId; });
        if (!audience) {
            console.log("Id khan gia khong ton tai");
            return;
        }
        var movie = this.movies.find(function (movie) { return movie.id = movieId; });
        if (!movie) {
            console.log("Id phim khong ton tai");
            return;
        }
        var newBooking = new TicketBooking(audience, movie, quantity);
        this.bookings.push(newBooking);
    };
    Cinema.prototype.cancelMovie = function (movieId) {
        var movie = this.movies.find(function (movie) { return movie.id == movieId; });
        if (!movie) {
            console.log("Id phim khong ton tai");
            return;
        }
        movie.isShowing = false;
    };
    Cinema.prototype.listShowingMovie = function () {
        var showingMovies = this.movies.filter(function (movie) { return movie.isShowing == true; });
        if (showingMovies.length == 0) {
            console.log("khong co phm dang chieu");
            return;
        }
        for (var _i = 0, showingMovies_1 = showingMovies; _i < showingMovies_1.length; _i++) {
            var movie = showingMovies_1[_i];
            console.log(movie.getMovieInfo());
        }
    };
    Cinema.prototype.listAudienceBooking = function (audienceId) {
        var audienceBookings = this.bookings.filter(function (booking) { return booking.audience.id = audienceId; });
        if (audienceBookings.length == 0) {
            console.log("Khach hang khong co don dat ve");
            return;
        }
        for (var _i = 0, audienceBookings_1 = audienceBookings; _i < audienceBookings_1.length; _i++) {
            var booking = audienceBookings_1[_i];
            booking.getDetails();
        }
    };
    Cinema.prototype.calculateTotalRevenue = function () {
        return this.bookings.reduce(function (sum, current) { return sum + current.totalPrice; }, 0);
    };
    Cinema.prototype.getMovieGenreCount = function () {
        var comedyCount = this.movies.reduce(function (sum, current) { return current.genre == "comedy" ? sum + 1 : sum; }, 0);
        var actionCount = this.movies.reduce(function (sum, current) { return current.genre == "action" ? sum + 1 : sum; }, 0);
        var animationCount = this.movies.reduce(function (sum, current) { return current.genre == "animation" ? sum + 1 : sum; }, 0);
        console.log("phim hanh dong: ".concat(actionCount, " phim"));
        console.log("phim hai: ".concat(comedyCount, " phim"));
        console.log("phim hoat hinh: ".concat(animationCount, " phim"));
    };
    Cinema.prototype.getMovieSpecialOffers = function (movieId) {
        var movie = this.movies.find(function (movie) { return movie.id = movieId; });
        if (!movie) {
            console.log("Id phim khong ton tai");
            return;
        }
        console.log(movie.getSpecialOffers());
    };
    Cinema.prototype.findMovieById = function (collection, id) {
        var movie = collection.find(function (movie) { return movie.id == id; });
        if (!movie) {
            console.log("Id khong ton tai");
            return;
        }
        console.log(movie.getMovieInfo());
    };
    Cinema.prototype.findAudienceById = function (collection, id) {
        var audience = collection.find(function (audience) { return audience.id == id; });
        if (!audience) {
            console.log("Id khong ton tai");
            return;
        }
        audience.getDetail();
    };
    Cinema.prototype.findTicketBookingById = function (collection, id) {
        var ticketBook = collection.find(function (ticketBook) { return ticketBook.bookingId == id; });
        if (!ticketBook) {
            console.log("Id khong ton tai");
            return;
        }
        ticketBook.getDetails();
    };
    return Cinema;
}());
var n;
var cinema = new Cinema();
do {
    n = prompt("\n        1. Them khan gia moi\n        2. Them phim moi\n        3. Dat ve\n        4. Ngung chieu phim\n        5. Hien thi danh sach phim dang chieu\n        6. Hien thi cac dat ve cua mot khan gia\n        7. Hien thi tong doanh thu\n        8. Dem so luong tung the loai\n        9. Tim kiem thong tin\n        10. Hien thi uu dai\n        11. thoat chuong trinh");
    if (n == null) {
        n = 0;
    }
    else {
        n = Number(n);
    }
    switch (n) {
        case 1:
            var audienceName = prompt("nhap ten khan gia");
            if (audienceName == null) {
                console.log("khong hop le");
                break;
            }
            var audienceEmail = prompt("nhap email khan gia");
            if (audienceEmail == null) {
                console.log("khong hop le");
                break;
            }
            var audiencePhone = prompt("nhap sdt khan gia");
            if (audiencePhone == null) {
                console.log("khong hop le");
                break;
            }
            cinema.addAudience(audienceName, audienceEmail, audiencePhone);
            console.log("them khan gia thanh cong");
            break;
        case 2:
            var movieTitle = prompt("nhap ten phim muon them: ");
            if (movieTitle == null) {
                console.log("khong hop le");
                break;
            }
            var moviePrice = prompt("nhap gia ve phim muon them: ");
            if (moviePrice == null || +moviePrice < 0) {
                console.log("khong hop le");
                break;
            }
            var movieGenre = prompt("\n                nhap the loai phim muon them: \n                actionMovie(A) comedyMovie(B) animationMovie(C)");
            if (movieGenre == null || movieGenre != "A" && movieGenre != "B" && movieGenre != "C") {
                console.log("khong hop le");
                break;
            }
            var newMovie = void 0;
            if (movieGenre == "A") {
                newMovie = new ActionMovie(movieTitle, +moviePrice);
            }
            else if (movieGenre == "B") {
                newMovie = new ComedyMovie(movieTitle, +moviePrice);
            }
            else {
                newMovie = new AnimationMovie(movieTitle, +moviePrice);
            }
            cinema.addMovie(newMovie);
            console.log("them phim moi thanh cong");
            break;
        case 3:
            var audienceId = prompt("nhap Id khan gia: ");
            if (audienceId == null) {
                console.log("khong hop le");
                break;
            }
            var movieId = prompt("nhap Id phim: ");
            if (movieId == null) {
                console.log("khong hop le");
                break;
            }
            var quantity = prompt("nhap so luong ve muon mua: ");
            if (quantity == null) {
                console.log("khong hop le");
                break;
            }
            cinema.bookingTickets(+audienceId, +movieId, +quantity);
            console.log("them don dat ve moi thanh cong");
            break;
        case 4:
            var cancelMovie = prompt("nhap Id phim muon ngung chieu");
            if (cancelMovie == null) {
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
            audienceId = prompt("nhap Id khan gia muon tim dat ve");
            if (audienceId == null) {
                console.log("khong hop le");
                break;
            }
            cinema.listAudienceBooking(+audienceId);
            break;
        case 7:
            console.log("Tong doanh thu: ".concat(cinema.calculateTotalRevenue()));
            break;
        case 8:
            cinema.getMovieGenreCount();
            break;
        case 9:
            movieId = prompt("nhap Id phim muon tim");
            if (movieId == null) {
                console.log("khong hop le");
                break;
            }
            cinema.findMovieById(cinema.movies, +movieId);
            break;
        case 10:
            var findOffers = prompt("nhap id phim muon tim uu dai: ");
            var findOffersReal = void 0;
            if (findOffers == null) {
                console.log("khong hop le");
                break;
            }
            else {
                findOffersReal = Number(findOffers);
            }
            cinema.getMovieSpecialOffers(findOffersReal);
            break;
        case 11:
            console.log("da thoat chuong trinh");
            break;
        default:
            console.log("khong hop le");
            break;
    }
} while (n != 11);
