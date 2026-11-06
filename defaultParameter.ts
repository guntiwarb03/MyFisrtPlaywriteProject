let sumission:number;
let addtwoNumber=(n1:number,n2:number=100):number=>{
return n1+n2;
}//here 100 is default value of n2

console.log(addtwoNumber(10));//here default value of n2 is considered
console.log(addtwoNumber(55,100));