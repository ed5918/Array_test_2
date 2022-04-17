function solve(arrOne, arrTwo){
 
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