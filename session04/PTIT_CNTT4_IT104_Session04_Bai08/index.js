function calculateOrderTotal(order) {
    var sum = order.items.reduce(function (sum, current) { return sum + current.quantity * current.product.price; }, 0);
    return sum;
}
function printOrder(order) {
    console.log("Don hang: ".concat(order.orderId, "\nKhach hang: ").concat(order.customerName, "\nSan pham: "));
    for (var _i = 0, _a = order.items; _i < _a.length; _i++) {
        var item = _a[_i];
        console.log("- ".concat(item.product.name, " x ").concat(item.quantity, " -> ").concat(item.product.price * item.quantity));
    }
    console.log("Tong cong: ".concat(calculateOrderTotal(order).toLocaleString(), " VND"));
    if (order.note) {
        console.log("".concat(order.note));
    }
}
var product1 = { id: "D01", name: "Ao so mi", price: 250000 };
var product2 = { id: "D02", name: "Quan tay", price: 400000 };
var order = {
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: product1,
            quantity: 2,
        },
        {
            product: product2,
            quantity: 1,
        }
    ],
    note: "Giao sau 18h",
};
printOrder(order);
