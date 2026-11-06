"use strict";
class parentClass {
    rollNo;
    nameStud;
    favSub;
    getRoll() {
        return this.rollNo;
    }
    setRoll(r) {
        this.rollNo = r;
    }
    getName() {
        return this.nameStud;
    }
    setName(n) {
        this.nameStud = n;
    }
    getFav() {
        return this.favSub;
    }
    setFav(s) {
        this.favSub = s;
    }
    constructor(roll, nameStud, favsub) {
        this.rollNo = roll;
        this.nameStud = nameStud;
        this.favSub = favsub;
    }
    getParentDetails() {
        console.log(`Roll:${this.rollNo},Name:${this.nameStud},Fav:${this.favSub}`);
    }
}
const STINFO1 = new parentClass(1, "Amol", "Maths");
const STINFO2 = new parentClass(2, "Anay", "Eng");
STINFO1.getParentDetails();
STINFO2.getParentDetails();
class childClass extends parentClass {
    school;
    address;
    constructor(roll, nameStud, favsub, sch, add) {
        super(roll, nameStud, favsub);
        this.school = sch;
        this.address = add;
    }
    getChildDetails() {
        console.log(`SCH:${this.school},ADD:${this.address}`);
    }
}
const StSchool = new childClass(1, "Amol", "Maths", "BVM", "Pune");
StSchool.getChildDetails();
