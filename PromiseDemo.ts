class newStudent{
    name:string;
    age:number;
    marks:number;

    constructor(name:string,age:number,marks:number){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    studentAdmission():Promise<string>{
        return new Promise((resolve,reject)=>{
            if(this.marks>=40){
                resolve(`Congratulation! ${this.name} your admission is confirm.`);
            }
            else{
                reject(`Sorry ${this.name}, your admission is not confirm.`);
            }
        });
    }
}
async function admissionProcess() {
    const student1= new newStudent("Rahul",10,35);
    await student1.studentAdmission()
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    });

    const student2= new newStudent("Amol",10,45);
    await student2.studentAdmission()
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    });
}
admissionProcess();
