class Table {
    constructor(arr) {
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    // Campo Virtual - Médoto transformado em atributo pelo get.
    get RowCount() {
        return this.rows.length;
    }

    get ColumnCount() {
        return this.header.length;
    }
}

module.exports = Table;