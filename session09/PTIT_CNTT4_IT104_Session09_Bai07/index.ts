class User{
    id: number;
    name: string;
    email:string;
    age?: number;

    constructor(id: number, name: string, email: string, age: number){
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
    }
}
function updateUser(user: User, updates: Partial<User>){
    if(Object.keys(updates).includes("id")){
        return "Id cannot be changed";
    }
    return {...user, ...updates};
}
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const updates = {
    id: 2,
  name: "Alice Johnson",
};
console.log(updateUser(user, updates));
