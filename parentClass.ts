class parentClass{
    protected rollNo:number;
    protected nameStud:string;
    protected favSub:string;

    public getRoll(){
        return this.rollNo;
    }
    public setRoll(r:number){
        this.rollNo=r;
    }
    public getName(){
        return this.nameStud;
    }
    public setName(n:string){
        this.nameStud=n;
    }
     public getFav(){
        return this.favSub;
    }
    public setFav(s:string){
        this.favSub=s;
    }
    constructor(roll:number,nameStud:string,favsub:string){
        this.rollNo=roll;
        this.nameStud=nameStud;
        this.favSub=favsub;
    }
    getParentDetails(){
        console.log(`Roll:${this.rollNo},Name:${this.nameStud},Fav:${this.favSub}`);
    }
}

const STINFO1 = new parentClass(1,"Amol","Maths");
const STINFO2 = new parentClass(2,"Anay","Eng");

STINFO1.getParentDetails();
STINFO2.getParentDetails();

class childClass extends parentClass{
    private school:string;
    private address:string;
    constructor(roll:number,nameStud:string,favsub:string,sch:string,add:string){
        super(roll,nameStud,favsub);
        this.school=sch;
        this.address=add;
    }
    getChildDetails(){
        console.log(`SCH:${this.school},ADD:${this.address}`);
    }
}
const StSchool= new childClass(1,"Amol","Maths","BVM","Pune");
StSchool.getChildDetails();