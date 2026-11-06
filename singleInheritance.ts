class collegeDetails{
    cname:string;
    caddress:string;
    constructor(cname:string,caddress:string){
        this.cname=cname;
        this.caddress=caddress;
    }
    printcollegeDetails(){
        console.log(`College Name:${this.cname},College Address:${this.caddress}`);
    }
}

class studentDetails extends collegeDetails{
    sname:string;
    sage:number;

    constructor(cname:string,caddress:string,sname:string,sage:number){
        super(cname,caddress);
        this.sname=sname;
        this.sage=sage;
    }

    printstudentDetails(){
        console.log(`College Name:${this.cname},College Address:${this.caddress},Student Name:${this.sname},Student Age:${this.sage}`);
    }
}

class deptDetails extends studentDetails{
    dname:string;
    dId:number;

    constructor(cname:string,caddress:string,sname:string,sage:number,dname:string,dId:number){
        super(cname,caddress,sname,sage);
        this.dname=dname;
        this.dId=dId;
    }

    printdeptDetails(){
        console.log(`College Name:${this.cname},College Address:${this.caddress},Student Name:${this.sname},Student Age:${this.sage},Dept Name:${this.dname},Dept Id:${this.dId}`);
    }
}
const college1 =new collegeDetails("DY PAtil","Mumbai");
college1.printcollegeDetails();
const student1 =new studentDetails("SNBP","PUNE","Amol",21);
student1.printstudentDetails();
const dept1 =new deptDetails("Vidya","Pune","Sunny",25,"IT",1);
dept1.printdeptDetails();