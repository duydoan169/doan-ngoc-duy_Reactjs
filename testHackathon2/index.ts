class Customer{
    static currentId=1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string){
        this.id=Customer.currentId++;
        this.name=name;
        this.email=email;
        this.shippingAddress=shippingAddress;
    }
    getDetail(){
        console.log(`Id: ${this.id}, Name: ${this.name}, Email: ${this.email}, ShippingAddress: ${this.shippingAddress}`);
    }
}

abstract class Product{
    static currentId=1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number){
        this.id=Product.currentId++;
        this.name=name;
        this.price=price;
        this.stock=stock;
    }
    sell(quantity: number){
        if(quantity<0){
            console.log("so luong khong hop le");
            return;
        }
        if(this.stock-quantity<0){
            console.log("khong du hang trong kho");
            return;
        }
        this.stock-=quantity;
    }
    restock(quantity: number){
        if(quantity<0){
            console.log("so luong khong hop le");
            return;
        }
        this.stock+=quantity;
    }
    abstract getProductInfo(): void;
    abstract getShippingCost(): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product{
    warrantyPeriod: number;
    
    constructor(name: string, price: number, stock: number, warrantyPeriod: number){
        super(name, price, stock);
        this.warrantyPeriod=warrantyPeriod;
    }
    getProductInfo(): void {
        console.log(`Id: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, WarrantyPeriod: ${this.warrantyPeriod}`);        
    }
    getShippingCost(): number {
        return 50000;
    }
    getCategory(): string {
        return "electronics"
    }
}
class ClothingProduct extends Product{
    size: string;
    color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string){
        super(name, price, stock);
        this.size=size;
        this.color=color;
    }
    getProductInfo(): void {
        console.log(`Id: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`);        
    }
    getShippingCost(): number {
        return 25000;
    }
    getCategory(): string {
        return "clothing";
    }
}
class Order{
    static currentId=1;
    orderId: number;
    customer: Customer;
    products: {product: Product, quantity: number}[];
    totalAmount: number;

    constructor(customer: Customer, products: {product: Product, quantity: number}[]){
        this.orderId=Order.currentId++;
        this.customer=customer;
        this.products=products;
        this.totalAmount=this.products.reduce((sum, current) => sum+current.product.price*current.quantity, 0);
    }
    getDetail(){
        let productStr=this.products.map(product => `${product.product.name} x${product.quantity}`).join(", ");
        console.log(`OrderId: ${this.orderId}, Customer: ${this.customer.name}, Product: [${productStr}], TotalAmount: ${this.totalAmount}`);
    }
}
class Store{
    products: Product[]=[];
    customers: Customer[]=[];
    orders: Order[]=[];

    addProduct(product: Product){
        this.products.push(product);
    }
    addCustomer(name: string, email: string, shippingAddress: string){
        let newCustomer=new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }
    createOrder(customerId: number, productQuantities: {productId: number, quantity: number}[]){
        let customer=this.customers.find(customer => customer.id==customerId);
        if(!customer){
            console.log("Id khong ton tai");
            return;
        }
        let orderProducts: {product: Product, quantity: number}[]=[];
        for (let pq of productQuantities) {
            let find=this.products.find(product => product.id==pq.productId);
            if(!find){
                console.log(`san pham voi Id: ${pq.productId} khong ton tai`);
                continue;
            }
            find.sell(pq.quantity);
            orderProducts.push({product: find, quantity: pq.quantity});
        }
        if(orderProducts.length==0){
            console.log("gio hang khong co san pham hop le");
            return;
        }
        let newOrder= new Order(customer, orderProducts);
        this.orders.push(newOrder);
    }
    cancelOrder(orderId: number){
        let orderIndex=this.orders.findIndex(order => order.orderId == orderId);
        if(orderIndex==-1){
            console.log("Id khong ton tai");
            return;
        }
        for (let product of this.orders[orderIndex].products) {
            product.product.restock(product.quantity);
        }
        this.orders.splice(orderIndex, 1);
    }
    listAvailableProducts(){
        let availableProducts=this.products.filter(product => product.stock > 0);
        for (let product of availableProducts) {
            product.getProductInfo();
        }
    }
    listCustomerOrder(customerId: number){
        let targetOrders = this.orders.filter(order => order.customer.id === customerId);
        if(targetOrders.length==0){
            console.log("Id khong ton tai");
            return;
        }
        for (let order of targetOrders) {
            order.getDetail();
        }
    }
    calculateTotalRevenue(){
        let totalRevenue=this.orders.reduce((sum, current) => sum + current.totalAmount, 0);
        console.log(`TotalRevenue: ${totalRevenue}`);
    }
    countProductsByCategory(){
        let electronicsCount=this.products.reduce((sum, current) => current.getCategory()=="electronics" ? sum+1 : sum, 0);
        let clothingCount=this.products.reduce((sum, current) => current.getCategory()=="clothing" ? sum+1 : sum, 0);
        console.log(`so san pham dien tu: ${electronicsCount}`);
        console.log(`so san pham quan ao: ${clothingCount}`);
    }
    updateProductStock(productId: number, newStock: number){
        let productIndex=this.products.findIndex(product => product.id==productId);
        if(productIndex==-1){
            console.log("Id khong ton tai");
            return;
        }
        this.products[productIndex].stock=newStock;
    }
}
let n;
do{
    n=prompt(`
        1. them khach hang moi
        2. them san pham moi
        3. tao don hang moi
        4. huy don hang
        5. hien thi danh sach san pham con hang
        6. hien thi danh sach don hang cua mot khach hang
        7. hien thi tong doanh thu cua hang
        8. thong ke san pham theo danh muc
        9. cap nhat ton kho mot san pham
        10. tim kiem va hien thi thong tin san pham
        11. xem thong tin chi tiet san pham
        12. thoat`);
    if(n==null){
        n=0;
    }else{
        n=Number(n);
    }
    switch(n){
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
}while(n!=12);