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

var empObj = new Employee(100, 'Pradnya', '27');

console.log("Employee Object: ",empObj);

console.log("Accessing non static method of the class: ");
empObj.swipeIn();

console.log("Accessing static method of the class--> ");
Employee.code();