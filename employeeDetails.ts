class employee{
    emp_id:number;
    emp_dept:string;
    emp_sal:number;
    emp_exprience:number;
    emp_city:string;

    constructor(id:number,dept:string,sal:number,exprience:number,city:string)
    {
        this.emp_id=id;
        this.emp_dept=dept;
        this.emp_sal=sal;
        this.emp_exprience=exprience;
        this.emp_city=city;

    }

    getDetails(){
        console.log(`ID:${this.emp_id},Dept:${this.emp_dept},Sal:${this.emp_sal},Exp:${this.emp_exprience},City:${this.emp_city}`);
    }

}
const E1= new employee(1,"IT",1000,2,"Pune");
const E2= new employee(1,"IT",1000,2,"Pune");
const E3= new employee(1,"IT",1000,2,"Pune");
const E4= new employee(1,"IT",1000,2,"Pune");

E1.getDetails();
E2.getDetails();
E3.getDetails();
E4.getDetails();
