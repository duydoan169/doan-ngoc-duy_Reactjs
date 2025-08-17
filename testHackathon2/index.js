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
var Customer = /** @class */ (function () {
    function Customer(name, email, shippingAddress) {
        this.id = Customer.currentId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    Customer.prototype.getDetail = function () {
        console.log("Id: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, ", ShippingAddress: ").concat(this.shippingAddress));
    };
    Customer.currentId = 1;
    return Customer;
}());
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.id = Product.currentId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.sell = function (quantity) {
        if (quantity < 0) {
            console.log("so luong khong hop le");
            return;
        }
        if (this.stock - quantity < 0) {
            console.log("khong du hang trong kho");
            return;
        }
        this.stock -= quantity;
    };
    Product.prototype.restock = function (quantity) {
        if (quantity < 0) {
            console.log("so luong khong hop le");
            return;
        }
        this.stock += quantity;
    };
    Product.currentId = 1;
    return Product;
}());
var ElectronicsProduct = /** @class */ (function (_super) {
    __extends(ElectronicsProduct, _super);
    function ElectronicsProduct(name, price, stock, warrantyPeriod) {
        var _this = _super.call(this, name, price, stock) || this;
        _this.warrantyPeriod = warrantyPeriod;
        return _this;
    }
    ElectronicsProduct.prototype.getProductInfo = function () {
        console.log("Id: ".concat(this.id, ", Name: ").concat(this.name, ", Price: ").concat(this.price, ", Stock: ").concat(this.stock, ", WarrantyPeriod: ").concat(this.warrantyPeriod));
    };
    ElectronicsProduct.prototype.getShippingCost = function () {
        return 50000;
    };
    ElectronicsProduct.prototype.getCategory = function () {
        return "electronics";
    };
    return ElectronicsProduct;
}(Product));
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct(name, price, stock, size, color) {
        var _this = _super.call(this, name, price, stock) || this;
        _this.size = size;
        _this.color = color;
        return _this;
    }
    ClothingProduct.prototype.getProductInfo = function () {
        console.log("Id: ".concat(this.id, ", Name: ").concat(this.name, ", Price: ").concat(this.price, ", Stock: ").concat(this.stock, ", Size: ").concat(this.size, ", Color: ").concat(this.color));
    };
    ClothingProduct.prototype.getShippingCost = function () {
        return 25000;
    };
    ClothingProduct.prototype.getCategory = function () {
        return "clothing";
    };
    return ClothingProduct;
}(Product));
var Order = /** @class */ (function () {
    function Order(customer, products) {
        this.orderId = Order.currentId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.products.reduce(function (sum, current) { return sum + current.product.price * current.quantity; }, 0);
    }
    Order.prototype.getDetail = function () {
        var productStr = this.products.map(function (product) { return "".concat(product.product.name, " x").concat(product.quantity); }).join(", ");
        console.log("OrderId: ".concat(this.orderId, ", Customer: ").concat(this.customer.name, ", Product: [").concat(productStr, "], TotalAmount: ").concat(this.totalAmount));
    };
    Order.currentId = 1;
    return Order;
}());
var Store = /** @class */ (function () {
    function Store() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    Store.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Store.prototype.addCustomer = function (name, email, shippingAddress) {
        var newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    };
    Store.prototype.createOrder = function (customerId, productQuantities) {
        var customer = this.customers.find(function (customer) { return customer.id == customerId; });
        if (!customer) {
            console.log("Id khong ton tai");
            return;
        }
        var orderProducts = [];
        var _loop_1 = function (pq) {
            var find = this_1.products.find(function (product) { return product.id == pq.productId; });
            if (!find) {
                console.log("san pham voi Id: ".concat(pq.productId, " khong ton tai"));
                return "continue";
            }
            find.sell(pq.quantity);
            orderProducts.push({ product: find, quantity: pq.quantity });
        };
        var this_1 = this;
        for (var _i = 0, productQuantities_1 = productQuantities; _i < productQuantities_1.length; _i++) {
            var pq = productQuantities_1[_i];
            _loop_1(pq);
        }
        if (orderProducts.length == 0) {
            console.log("gio hang khong co san pham hop le");
            return;
        }
        var newOrder = new Order(customer, orderProducts);
        this.orders.push(newOrder);
    };
    Store.prototype.cancelOrder = function (orderId) {
        var orderIndex = this.orders.findIndex(function (order) { return order.orderId == orderId; });
        if (orderIndex == -1) {
            console.log("Id khong ton tai");
            return;
        }
        for (var _i = 0, _a = this.orders[orderIndex].products; _i < _a.length; _i++) {
            var product = _a[_i];
            product.product.restock(product.quantity);
        }
        this.orders.splice(orderIndex, 1);
    };
    Store.prototype.listAvailableProducts = function () {
        var availableProducts = this.products.filter(function (product) { return product.stock > 0; });
        for (var _i = 0, availableProducts_1 = availableProducts; _i < availableProducts_1.length; _i++) {
            var product = availableProducts_1[_i];
            product.getProductInfo();
        }
    };
    Store.prototype.listCustomerOrder = function (customerId) {
        var targetOrders = this.orders.filter(function (order) { return order.customer.id === customerId; });
        if (targetOrders.length == 0) {
            console.log("Id khong ton tai");
            return;
        }
        for (var _i = 0, targetOrders_1 = targetOrders; _i < targetOrders_1.length; _i++) {
            var order = targetOrders_1[_i];
            order.getDetail();
        }
    };
    Store.prototype.calculateTotalRevenue = function () {
        var totalRevenue = this.orders.reduce(function (sum, current) { return sum + current.totalAmount; }, 0);
        console.log("TotalRevenue: ".concat(totalRevenue));
    };
    Store.prototype.countProductsByCategory = function () {
        var electronicsCount = this.products.reduce(function (sum, current) { return current.getCategory() == "electronics" ? sum + 1 : sum; }, 0);
        var clothingCount = this.products.reduce(function (sum, current) { return current.getCategory() == "clothing" ? sum + 1 : sum; }, 0);
        console.log("so san pham dien tu: ".concat(electronicsCount));
        console.log("so san pham quan ao: ".concat(clothingCount));
    };
    Store.prototype.updateProductStock = function (productId, newStock) {
        var productIndex = this.products.findIndex(function (product) { return product.id == productId; });
        if (productIndex == -1) {
            console.log("Id khong ton tai");
            return;
        }
        this.products[productIndex].stock = newStock;
    };
    return Store;
}());
var n;
do {
    n = prompt("\n        1. them khach hang moi\n        2. them san pham moi\n        3. tao don hang moi\n        4. huy don hang\n        5. hien thi danh sach san pham con hang\n        6. hien thi danh sach don hang cua mot khach hang\n        7. hien thi tong doanh thu cua hang\n        8. thong ke san pham theo danh muc\n        9. cap nhat ton kho mot san pham\n        10. tim kiem va hien thi thong tin san pham\n        11. xem thong tin chi tiet san pham\n        12. thoat");
    if (n == null) {
        n = 0;
    }
    switch (n) {
        case 1:
            console.log("case 1");
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        default:
            console.log("khong hop le");
    }
} while (n != 12);
