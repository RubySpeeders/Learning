class Department  {
    //name: string = 'DEFAULT';
    // private name: string;
    // private readonly id: number;
    protected employees: string[] = []

    //tied to the class, allows you to do some initialisation
    constructor (public name: string, private readonly id: number) {
        // this.name = n;
    }
    //"this" in this case is special to ts
    describe(this: Department) {
        console.log(`Department`, this.id, this.name)
    }

    addEmployee(employee: string) {
        //potential validation
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length, this.employees);
    }
}

class ITDepartment extends Department{
//admins: string[];
 constructor(id: number, public admins: string[]) {
     super('IT', id);
     //this.admins = admins;
 }
}

class AccountingDepartment extends Department{
    private static instance: AccountingDepartment;
    private constructor(id: number, private reports: string[]){
        super('Accounting', id)
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(1, [])
        return this.instance
    }

    addEmployee(name: string){
        if (name === 'Max') {
        return
            }
        this.employees.push(name)
            }

    addReport(text: string){
        this.reports.push(text);
    }
    printReports(){
        console.log(this.reports);
    }
}

const it = new ITDepartment (2, ['Violet'])
console.log(it);

// const accounting = new AccountingDepartment (1, []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.addReport('Something went ok');
accounting.printReports();

accounting.addEmployee('Sarah');
accounting.addEmployee('Violet');
accounting.addEmployee('Max');

//this could be dangerous! one uniform of adding employees
//accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}