var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.add = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    DataStore.prototype.remove = function (index) {
        this.data.splice(index, 1);
    };
    return DataStore;
}());
