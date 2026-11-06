class voting{
    v_name:String;
    v_age:number;
    v_city:string;
    constructor(v_name:String,v_age:number,v_city:string){
        this.v_name=v_name;
        this.v_age=v_age;
        this.v_city=v_city;
    }
    votingright():Promise<string>{
        return new Promise((resolve,reject)=>{
            if(this.v_age>=18){
                resolve(`Congratulation!,${this.v_name} you are eligible for voting.`);
            }
            else{
                reject(`Sorry!,${this.v_name} you are not eligible for voting.`);
            }
        });
    }
}
async function votingconfirmation() {
    const voter1 = new voting("Amol",20,"Parbhani");
    await voter1.votingright()
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    });

    const voter2 = new voting("Smrudhi",10,"Parbhani");
    await voter2.votingright()
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    });
    
}
votingconfirmation();