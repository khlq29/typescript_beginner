class Department{
    
    // private readonly id:string
    // private name: string
   private employees: string[] = []

    constructor(private readonly id:string , public name:string){
        // this.name = name
        // this.id =id
    }

    describe(this:Department){
        console.log(`department ${this.id}: ${this.name}`);

    }

    addEmployee(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("d1" ,"Accounting");


accounting.addEmployee(`Yukinon`)
accounting.addEmployee('Senadina')

// accounting.employees[2] = "Navia" //error
accounting.describe();
accounting.printEmployeeInfo()

accounting.name = 'new name'
// const accountingCopy = {
//     name :'dummy' , 
//     describe: accounting.describe
// }

// accountingCopy.describe()


