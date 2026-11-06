class classRoom{
    private st_id:number;//these data members we can not access outside class scope
    private st_name:string;
    private st_age:number;
    private st_subj:string;

    public getID():number//getter fetch the value of data member
    {
        return this.st_id;
    }
    public setID(i:number):void// setter set the value to new data member
    {
        this.st_id=i;
    }
    public getName():string{
        return this.st_name;
    }
    public setName(nm:string):void{
        this.st_name=nm;
    }

    public getSubject():string{
        return this.st_subj;
    }
    public setSubject(sb:string){
        this.st_subj=sb;
    }

    constructor(st_id:number,st_name:string,st_age:number,st_subj:string){
        this.st_id=st_id;
        this.st_name=st_name;
        this.st_age=st_age;
        this.st_subj=st_subj;
    }
    getRoomDetails(){
        console.log(`ID:${this.st_id},Name:${this.st_name},Age:${this.st_age},Sub:${this.st_subj}`);
    }

}

const ST1=new classRoom(1,"Smrudhi",8,"Marathi");
const ST2=new classRoom(2,"Maithili",15,"English");
const ST3=new classRoom(3,"Shaswat",12,"Maths");

ST1.getRoomDetails();
ST2.getRoomDetails();
ST3.getRoomDetails();

ST1.setName("Ananya");
ST2.setSubject("Science");
ST1.getRoomDetails();
ST2.getRoomDetails();


