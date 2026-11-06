class ninthClass{
    st_id:number;//no access specifier mentioned thats why by default it is public specifer
    st_name:string;
    st_age:number;
    st_subj:string;

    constructor(st_id:number,st_name:string,st_age:number,st_subj:string){
        this.st_id=st_id;
        this.st_name=st_name;
        this.st_age=st_age;
        this.st_subj=st_subj;
    }
    getClassDetails(){
        console.log(`ID:${this.st_id},Name:${this.st_name},Age:${this.st_age},Sub:${this.st_subj}`);
    }

}

const studen1=new ninthClass(1,"Smrudhi",8,"Marathi");
const studen2=new ninthClass(2,"Smrudhi",15,"English");
const studen3=new ninthClass(3,"Smrudhi",12,"Maths");

studen1.getClassDetails();
studen2.getClassDetails();
studen3.getClassDetails();


