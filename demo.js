// function solve(arr){

//     let myArr = arr;
//     let sumOfOriginalArray = 0;
//     let modifiedArray = 0;

//     for (let index = 0; index < myArr.length; index++) {
//         sumOfOriginalArray += myArr[index];
//         if (myArr[index] % 2 === 0) {
//             myArr[index] += index;
//         }else{
//             myArr[index] -= index;
//         }
//         modifiedArray += myArr[index];

//     }
//     console.log(myArr);
//     console.log(sumOfOriginalArray);
//     console.log(modifiedArray);
// }
// solve([5, 15, 23, 56, 35]);

function solve(arrOne,arrTwo){

    for (let index = 0; index < arrOne.length; index++) {
        for (let j = 0; j < arrTwo.length; j++) {
           if (arrOne[index] === arrTwo[j]) {
               console.log(arrOne[index]);
           }
            
        }
        
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)