type Product = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
    note?: string;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    deliveryAddress: string;
    isPaid: boolean;
};

type Invoice = {
    invoiceId: string;
    orders: Order[];
    createdAt: Date;
};
function calculateInvoiceTotal(invoice: Invoice): number{
    let sum=invoice.orders.reduce((sum, current)=> sum+current.items.reduce((sum, current)=> sum+current.product.price*current.quantity, 0), 0);
    return sum;
}
function getUnpaidOrders(invoice: Invoice): Order[]{
    let order: Order[]=invoice.orders.filter(order => order.isPaid==false);
    return order;
}
function printInvoice(invoice: Invoice): void{
    console.log(`HOA DON: #${invoice.invoiceId} - Ngay tao: ${invoice.createdAt}
        --------------------------------------------------`);
    for (let order of invoice.orders) {
        console.log(`DON HANG: #${order.orderId} - ${order.customerName}`);
        for (let item of order.items) {
            console.log(`- ${item.product.name} x ${item.quantity} -> ${(item.product.price*item.quantity).toLocaleString()} VND ${item.note ? `(note: ${item.note})` : ""}`);
        }
        console.log(`Tong don: ${order.items.reduce((sum, current) => sum+current.product.price*current.quantity, 0).toLocaleString()} VND
${order.isPaid ? "DA THANH TOAN" : "CHUA THANH TOAN"}
        `);
    }
    console.log(`>> Tong cong hoa don: ${calculateInvoiceTotal(invoice).toLocaleString()} VND`);
}
let invoice: Invoice={
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
                    product: {id: "D01", name: "Ao so mi", price: 250000},
                    quantity: 2,
                },
                {
                    product: {id: "D02", name: "Quan tay", price: 400000},
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
                    product: {id: "D01", name: "Vay hoa", price: 700000},
                    quantity: 1,
                    note: "size M",
                }
            ]
        }
    ]
}
printInvoice(invoice);