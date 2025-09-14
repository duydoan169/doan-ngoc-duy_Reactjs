var MenuItem = /** @class */ (function () {
    function MenuItem(name, price) {
        this.id = MenuItem.currentId++;
        this.name = name;
        this.price = price;
    }
    MenuItem.currentId = 1;
    return MenuItem;
}());
var Table = /** @class */ (function () {
    function Table(capacity, available) {
        this.id = Table.currentId++;
        this.capacity = capacity;
        this.available = available;
    }
    Table.currentId = 1;
    return Table;
}());
var Reservation = /** @class */ (function () {
    function Reservation(customerName, tableId) {
        this.tableId = tableId;
        this.id = Reservation.currentId++;
        this.customerName = customerName;
    }
    Reservation.currentId = 1;
    return Reservation;
}());
var Order = /** @class */ (function () {
    function Order(tableId) {
        this.items = [];
        this.tableId = tableId;
        this.id = Order.currentId++;
    }
    Order.prototype.getTotal = function () {
        var result = this.items.reduce(function (sum, current) { return sum + current.price; }, 0);
        return result;
    };
    Order.currentId = 1;
    return Order;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    Restaurant.prototype.addMenuItem = function (item) {
        this.menu.push(item);
    };
    Restaurant.prototype.addTable = function (table) {
        this.tables.push(table);
    };
    Restaurant.prototype.makeReservation = function (customerName, tableId) {
        var tableIndex = this.tables.findIndex(function (table) { return table.id == tableId; });
        if (tableIndex == -1) {
            console.log("Id khong ton tai");
            return;
        }
        if (!this.tables[tableIndex].available) {
            console.log("ban da co nguoi dat");
            return;
        }
        this.reservations.push(new Reservation(customerName, tableId));
        this.tables[tableIndex].available = false;
        console.log("dat ban thanh cong");
    };
    Restaurant.prototype.placeOrder = function (tableId, items) {
        var tableIndex = this.tables.findIndex(function (table) { return table.id == tableId; });
        if (tableIndex == -1) {
            console.log("Id khong ton tai");
            return;
        }
        var newOrder = new Order(tableId);
        newOrder.items = items;
        this.orders.push(newOrder);
    };
    Restaurant.prototype.generateBill = function (tableId) {
        var orderIndex = this.orders.findIndex(function (order) { return order.tableId == tableId; });
        if (orderIndex == -1) {
            console.log("Don hang khong ton tai");
            return;
        }
        var total = this.orders[orderIndex].getTotal();
        console.log("tong tien ban #".concat(tableId, ": ").concat(total));
        this.orders.splice(orderIndex, 1);
        var tableIndex = this.tables.findIndex(function (table) { return table.id == tableId; });
        this.tables[tableIndex].available = true;
    };
    return Restaurant;
}());
