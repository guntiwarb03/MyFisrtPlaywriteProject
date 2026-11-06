"use strict";
class newStudent {
    name;
    age;
    marks;
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    studentAdmission() {
        return new Promise((resolve, reject) => {
            if (this.marks >= 40) {
                resolve(`Congratulation! ${this.name} your admission is confirm.`);
            }
            else {
                reject(`Sorry ${this.name}, your admission is not confirm.`);
            }
        });
    }
}
async function admissionProcess() {
    const student1 = new newStudent("Rahul", 10, 35);
    await student1.studentAdmission()
        .then((message) => {
        console.log(message);
    })
        .catch((error) => {
        console.log(error);
    });
    const student2 = new newStudent("Amol", 10, 45);
    await student2.studentAdmission()
        .then((message) => {
        console.log(message);
    })
        .catch((error) => {
        console.log(error);
    });
}
admissionProcess();
