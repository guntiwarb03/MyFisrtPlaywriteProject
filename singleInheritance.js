"use strict";
class collegeDetails {
    cname;
    caddress;
    constructor(cname, caddress) {
        this.cname = cname;
        this.caddress = caddress;
    }
    printcollegeDetails() {
        console.log(`College Name:${this.cname},College Address:${this.caddress}`);
    }
}
class studentDetails extends collegeDetails {
    sname;
    sage;
    constructor(cname, caddress, sname, sage) {
        super(cname, caddress);
        this.sname = sname;
        this.sage = sage;
    }
    printstudentDetails() {
        console.log(`College Name:${this.cname},College Address:${this.caddress},Student Name:${this.sname},Student Age:${this.sage}`);
    }
}
class deptDetails extends studentDetails {
    dname;
    dId;
    constructor(cname, caddress, sname, sage, dname, dId) {
        super(cname, caddress, sname, sage);
        this.dname = dname;
        this.dId = dId;
    }
    printdeptDetails() {
        console.log(`College Name:${this.cname},College Address:${this.caddress},Student Name:${this.sname},Student Age:${this.sage},Dept Name:${this.dname},Dept Id:${this.dId}`);
    }
}
const college1 = new collegeDetails("DY PAtil", "Mumbai");
college1.printcollegeDetails();
const student1 = new studentDetails("SNBP", "PUNE", "Amol", 21);
student1.printstudentDetails();
const dept1 = new deptDetails("Vidya", "Pune", "Sunny", 25, "IT", 1);
dept1.printdeptDetails();
