"use strict";
// let studRoll:number[][]=[[1,2],[3,4],[5,6]];
// console.log(studRoll[0][0]);
// console.log(studRoll[1][0]);
// console.log(studRoll[2][1]);
// console.log(studRoll.length);
// for(let i=0;i<studRoll.length;i++)//rows: arry.length fetch no of rows
//     {
//     for(let j=0;j<studRoll[i].length;j++)//columns :no of columns in particular row
//         {
//         console.log(studRoll[i][j]);
//     }
// }
let rollNo = [[1, 2], [3, 4, 5, 6, 7], [8, 9]];
for (let i = 0; i < rollNo.length; i++) //rows: arry.length fetch no of rows
 {
    for (let j = 0; j < rollNo[i].length; j++) //columns :no of columns in particular row
     {
        console.log(rollNo[i][j]);
    }
}
