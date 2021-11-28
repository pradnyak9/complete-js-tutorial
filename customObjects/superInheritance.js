class Employee {

    constructor(empid, empname, empage) {
        this.id = empid;
        this.name = empname;
        this.age = empage;
    }

    swipeIn() {
        console.log("Employee Id "+ this.id + " swipe in at "+new Date().toLocaleDateString() +" "+new Date().toLocaleTimeString());
    }

    static code() {
        console.log("Employee is coding");
    }
}

class ContractEmployee extends Employee {
    constructor(empid, empname, empage, contractPeriod) {
        super(empid, empname, empage);
        this.contractPeriod = contractPeriod;
    }    

    swipeIn() {
        console.log("Contracted employee swipe details");
        super.swipeIn();
    }

    static code() {
        console.log("Contracted employee is coding");
    }
}

var contractEmpObj = new ContractEmployee(1001, 'Pradnya', 27, 3);

console.log("Contract Employee Object: ",contractEmpObj);

console.log("Accessing non static method of the class: ");
contractEmpObj.swipeIn();

console.log("Accessing static method of the class--> ");
ContractEmployee.code();