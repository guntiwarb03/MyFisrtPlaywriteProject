"use strict";
class classRoom {
    st_id; //these data members we can not access outside class scope
    st_name;
    st_age;
    st_subj;
    getID() {
        return this.st_id;
    }
    setID(i) {
        this.st_id = i;
    }
    getName() {
        return this.st_name;
    }
    setName(nm) {
        this.st_name = nm;
    }
    getSubject() {
        return this.st_subj;
    }
    setSubject(sb) {
        this.st_subj = sb;
    }
    constructor(st_id, st_name, st_age, st_subj) {
        this.st_id = st_id;
        this.st_name = st_name;
        this.st_age = st_age;
        this.st_subj = st_subj;
    }
    getRoomDetails() {
        console.log(`ID:${this.st_id},Name:${this.st_name},Age:${this.st_age},Sub:${this.st_subj}`);
    }
}
const ST1 = new classRoom(1, "Smrudhi", 8, "Marathi");
const ST2 = new classRoom(2, "Maithili", 15, "English");
const ST3 = new classRoom(3, "Shaswat", 12, "Maths");
ST1.getRoomDetails();
ST2.getRoomDetails();
ST3.getRoomDetails();
ST1.setName("Ananya");
ST2.setSubject("Science");
ST1.getRoomDetails();
ST2.getRoomDetails();
