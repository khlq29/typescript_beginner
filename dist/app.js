"use strict";
class Department {
    id;
    name;
    employees = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.addEmployee(`Yukinon`);
accounting.addEmployee('Senadina');
accounting.describe();
accounting.printEmployeeInfo();
accounting.name = 'new name';
//# sourceMappingURL=app.js.map