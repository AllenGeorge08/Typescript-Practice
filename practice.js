"use strict";
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["PRESENT"] = 0] = "PRESENT";
    StudentStatus[StudentStatus["ABSENT"] = 1] = "ABSENT";
})(StudentStatus || (StudentStatus = {}));
class Classroom {
    constructor() {
        this.students = new Map();
        this.studentNumber = 0;
    }
    generateId() {
        return ++this.studentNumber;
    }
    addStudent(name, card) {
        this.students.set(name, card);
        let idNumber = this.generateId();
        console.log(`The name of the student is: ${name} and the id of the student is ${idNumber}`);
        return { success: true, id: idNumber };
    }
    deleteStudent(name, id) {
        try {
            this.students.delete(name);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    //    If there is no element inside the map we get undefined
    getStudent(name) {
        const student = this.students.get(name);
        if (student) {
            console.log(`The name and age of the student is ${student.name}, ${student.age}`);
        }
        else {
            console.log(`The name of the student is: ${name} doesn't exist`);
        }
        return this.students.get(name);
    }
}
const classroom = new Classroom();
let student = {
    name: "Abel",
    age: 15,
};
classroom.addStudent("Abel", student);
classroom.getStudent("Abel");
let student2 = {
    name: "Allen",
    age: 21,
};
classroom.addStudent("Allen", student2);
classroom.getStudent("Allen");
