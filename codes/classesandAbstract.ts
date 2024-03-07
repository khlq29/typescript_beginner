//base or super class

abstract class Department{
    static fiscalYear = 2024
    // private readonly id:string
    // private name: string
   protected employees: string[] = []

    constructor(protected readonly id:string , public name:string){
        // this.name = name
        // this.id =id
    }

    static createEmployee(name:string){
        return {name:name}

    }

    abstract describe(this:Department):void;

    addEmployee(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


//derived class 1

class ITDepartment extends Department{
    admins:string[]
    constructor(id:string,  admins:string[]){
        super(id, 'IT')
        this.admins = admins

    }
    describe() {
        console.log("this department is: ID = "+ this.id);
        
    }

}

const employee1 = Department.createEmployee("Raiden")
console.log(employee1 , Department.fiscalYear);

const iTDepart = new ITDepartment("d1", ['Max'])




iTDepart.describe();

iTDepart.addEmployee(`Yukinon`)
iTDepart.addEmployee('Senadina')

// accounting.employees[2] = "Navia" //error
// iTDepart.describe();
iTDepart.printEmployeeInfo()

iTDepart.name = 'new name'


//derived class 2


class AccountingDepartment extends Department{
   private lastReport :string
   private static instance: AccountingDepartment

   get mostRecentReports(){
    if(this.lastReport){
        return this.lastReport;
    }
    throw new Error ('No report found.')
   }

   set mostRecentReports(value:string){
    if(!value){
        throw new Error('PLEASE PASS IN A VAL')
    }
    this.addReport(value)

   }

   private constructor(id:string, private reports:string[]){
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment("d2", [])
        return this.instance

    }

    addReport(text:string){
        this.reports.push(text)
        this.lastReport = text

    }

    printReport(){
        console.log(this.reports);
    }

    addEmployee(name:string){
        if (name === 'Senadina'){
            return
        }

        this.employees.push(name)
    }

    describe() {
        console.log("Accounting Department - ID : " + this.id);
        
    }

}



const accounting = AccountingDepartment.getInstance();
 accounting.describe();
accounting.mostRecentReports = "this is a setter"

console.log(accounting.mostRecentReports);
accounting.addReport("Something went wrong ......")
accounting.printReport()


accounting.addEmployee(`Yukinon`)
accounting.addEmployee('Senadina')

// // accounting.employees[2] = "Navia" //error

accounting.printEmployeeInfo()

// accounting.name = 'new name'
// // const accountingCopy = {
// //     name :'dummy' , 
// //     describe: accounting.describe
// // }

// // accountingCopy.describe()
