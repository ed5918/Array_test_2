function solve(arr){
    // Write a function, which changes the value of odd and even numbers in an array of numbers.

    // If the number is even - add to its value its index position
    // If the number is odd - subtract to its value its index position

    // Output
    // On the first line print the newly modified array, 
    //on the second line print the sum of numbers from the original array, 
    //on the third line print the sum of numbers from the modified array.

    // Step 1. crete new array to store the modified value of the arr

    let modifiedArray = arr;
    let sumOfOriginalArray = 0;
    let changedArray = 0;

    for(let i = 0; i < modifiedArray.length; i++){
        sumOfOriginalArray += modifiedArray[i];
        if (modifiedArray[i] % 2 ===0) {
            modifiedArray[i] += i;
        }else{
            modifiedArray[i] -= i;
        }
        changedArray += modifiedArray[i]
    }
    console.log(modifiedArray);
    console.log(sumOfOriginalArray);
    console.log(changedArray);
}
solve([5, 15, 23, 56, 35]);
// solve();