class DataStore<T>{
    private data: T[]=[];

    add(item: T){
        this.data.push(item);
    }
    getAll(){
        return this.data;
    }
    remove(index: number){
        this.data.splice(index, 1);
    }
}