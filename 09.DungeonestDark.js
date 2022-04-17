function solve(input){
   let rooms = input[0].split('|');
   let health = 100;
   let coins = 0;
   let isFinished = true;

   for (let index = 0; index < rooms.length; index++) {
       let room = rooms[index].split(' ');
console.log(room);
   }

}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])