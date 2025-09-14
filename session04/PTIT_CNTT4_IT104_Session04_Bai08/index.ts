type Product={
    readonly id: string;
    name: string;
    price: number;
};
type OrderItem={
    product: Product;
    quantity: number;
};
type Order={
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string 
}
function calculateOrderTotal(order: Order): number{
    let sum=order.items.reduce((sum, current) => sum + current.quantity*current.product.price, 0);
    return sum;
}
function printOrder(order: Order): void{
    console.log(`Don hang: ${order.orderId}
Khach hang: ${order.customerName}
San pham: `);
    for (let item of order.items) {
        console.log(`- ${item.product.name} x ${item.quantity} -> ${item.product.price*item.quantity}`);
    }
    console.log(`Tong cong: ${calculateOrderTotal(order).toLocaleString()} VND`);
    if(order.note){
        console.log(`${order.note}`);
    }
}
let product1: Product={id: "D01", name: "Ao so mi", price: 250000};
let product2: Product={id: "D02", name: "Quan tay", price: 400000};
let order: Order={
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items:[
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
}
printOrder(order);