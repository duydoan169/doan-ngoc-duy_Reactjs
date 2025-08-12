class MenuItem{
    static currentId=1;
    id: number;
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.id=MenuItem.currentId++;
        this.name=name;
        this.price=price;
    }
}

class Table{
    static currentId=1;
    id: number;
    capacity: number;
    available: boolean;

    constructor(capacity: number, available: boolean){
        this.id=Table.currentId++;
        this.capacity=capacity;
        this.available=available
    }
}
class Reservation{
    static currentId=1;
    id: number;
    customerName: string;
    tableId: number;

    constructor(customerName: string, tableId: number){
        this.tableId=tableId;
        this.id=Reservation.currentId++;
        this.customerName=customerName;
    }
}
class Order{
    static currentId=1;
    id: number;
    tableId: number;
    items: MenuItem[]=[];

    constructor(tableId: number){
        this.tableId=tableId;
        this.id=Order.currentId++;
    }

    getTotal(){
        let result=this.items.reduce((sum, current) => sum+current.price, 0);
        return result;
    }
}
class Restaurant{
    menu: MenuItem[]=[];
    tables: Table[]=[];
    reservations: Reservation[]=[];
    orders: Order[]=[];

    addMenuItem(item: MenuItem){
        this.menu.push(item);
    }
    addTable(table: Table){
        this.tables.push(table);
    }
    makeReservation(customerName: string, tableId: number){
        let tableIndex=this.tables.findIndex(table => table.id==tableId);
        if(tableIndex==-1){
            console.log("Id khong ton tai");
            return;
        }
        if(!this.tables[tableIndex].available){
            console.log("ban da co nguoi dat");
            return
        }
        this.reservations.push(new Reservation(customerName, tableId));
        this.tables[tableIndex].available=false;
        console.log("dat ban thanh cong");
    }
    placeOrder(tableId: number, items: MenuItem[]){
        let tableIndex=this.tables.findIndex(table => table.id==tableId);
        if(tableIndex==-1){
            console.log("Id khong ton tai");
            return;
        }
        let newOrder=new Order(tableId);
        newOrder.items=items;
        this.orders.push(newOrder);
    }
    generateBill(tableId: number){
        let orderIndex=this.orders.findIndex(order => order.tableId==tableId);
        if(orderIndex==-1){
            console.log("Don hang khong ton tai");
            return;
        }
        let total=this.orders[orderIndex].getTotal();
        console.log(`tong tien ban #${tableId}: ${total}`);
        this.orders.splice(orderIndex, 1);
        let tableIndex=this.tables.findIndex(table => table.id==tableId);
        this.tables[tableIndex].available=true;
    }
}