"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvoiceTotal(invoice) {
    let sum = invoice.orders.reduce((sum, current) => sum + current.items.reduce((sum, current) => sum + current.product.price * current.quantity, 0), 0);
    return sum;
}
function getUnpaidOrders(invoice) {
    let order = invoice.orders.filter(order => order.isPaid == false);
    return order;
}
function printInvoice(invoice) {
    console.log(`HOA DON: #${invoice.invoiceId} - Ngay tao: ${invoice.createdAt}
        --------------------------------------------------`);
    for (let order of invoice.orders) {
        console.log(`DON HANG: #${order.orderId} - ${order.customerName}`);
        for (let item of order.items) {
            console.log(`- ${item.product.name} x ${item.quantity} -> ${(item.product.price * item.quantity).toLocaleString()} VND ${item.note ? `(note: ${item.note})` : ""}`);
        }
        console.log(`Tong don: ${order.items.reduce((sum, current) => sum + current.product.price * current.quantity, 0).toLocaleString()} VND
${order.isPaid ? "DA THANH TOAN" : "CHUA THANH TOAN"}
        `);
    }
    console.log(`>> Tong cong hoa don: ${calculateInvoiceTotal(invoice).toLocaleString()} VND`);
}
let invoice = {
    invoiceId: "INV001",
    createdAt: new Date(),
    orders: [
        {
            orderId: "ORD001",
            customerName: "Nguyen Van A",
            deliveryAddress: "Ha Noi",
            isPaid: true,
            items: [
                {
                    product: { id: "D01", name: "Ao so mi", price: 250000 },
                    quantity: 2,
                },
                {
                    product: { id: "D02", name: "Quan tay", price: 400000 },
                    quantity: 1,
                }
            ]
        },
        {
            orderId: "ORD002",
            customerName: "Tran Thi B",
            deliveryAddress: "TP HCM",
            isPaid: false,
            items: [
                {
                    product: { id: "D01", name: "Vay hoa", price: 700000 },
                    quantity: 1,
                    note: "size M",
                }
            ]
        }
    ]
};
printInvoice(invoice);
