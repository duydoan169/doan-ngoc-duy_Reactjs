type Product={
     id: string;
     name: string;
     price: number;
     category: {
        id: string;
       name: string;
    };
    discount?: number;
};
let arr: Product[]=[
    {
        id: "D01",
        name: "Ao so mi",
        price: 240000,
        category:{
            id: "N01",
            name: "Thoi trang nam",
        },
        discount: 0.2,
    },
    {
        id: "D02",
        name: "iphone 99",
        price: 500000000,
        category:{
            id: "N02",
            name: "thiet bi dien tu",
        },
        discount: 0.99,
    },
    {
        id: "D03",
        name: "chuot logitech g304",
        price: 30000,
        category:{
            id: "N03",
            name: "thiet bi dien tu",
        }
    }
]
function getFinalPrice(product: Product): number{
    if(product.discount){
        return product.price-product.price*product.discount;
    }
    return product.price;
}
function printProductInfo(product: Product){
    console.log(`Ten: ${product.name}
Gia goc: ${product.price.toLocaleString()}
Gia sau giam: ${getFinalPrice(product).toLocaleString()}
Danh muc: ${product.category.name}`);   
}
printProductInfo(arr[1]);
