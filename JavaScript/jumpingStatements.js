//1) break keyword:

//Printing numbers between 1 to 10
// for(let i=1; i<=10; i++){
    
//     if(i==5){
//         break
//     }
//     console.log(i) //1 2 3 4
// }

//2) continue keyword:

// for(let i=1; i<=10; i++){
//     if(i==5){
//         continue //skip the value 5
//     }
//     console.log(i) //1 2 3 4 6 7 8 9 10
// }

for(let i=1; i<=10; i++){
    if(i==3 ||i==5 ||i==9){
        continue //skip the value 3, 5 and 9
    }
    console.log(i) //1 2 4 6 7 8 10
}