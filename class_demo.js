"use strict";
class studDemo {
    id;
    name;
    addharCard;
    panCard;
    constructor(id, name, addharCard, panCard) {
        this.id = id;
        this.name = name;
        this.addharCard = addharCard;
        this.panCard = panCard;
    }
    getDetails() {
        console.log(`ID:${this.id},Name:${this.name},AdhharCard:${this.addharCard},PanCard:${this.panCard}`);
    }
}
const stud1 = new studDemo(1, "Amol", 7889321, "AAKPO");
const stud2 = new studDemo(2, "Ananya", 7889321, "AAKPO1");
const stud3 = new studDemo(1, "Baby", 7889321, "AAKPO3");
const stud4 = new studDemo(1, "Sunny", 7889321, "AAKPO4");
const stud5 = new studDemo(1, "Anna", 7889321, "AAKPO4");
stud1.getDetails();
stud2.getDetails();
stud3.getDetails();
stud4.getDetails();
stud5.getDetails();
