var side = 27
const socket = io()
function setup() {
    frameRate(10)
    createCanvas(27 * side, 27 * side)
}
function changeColors(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
                   if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('#034f09')
            } else if (matrix[y][x] == 5) {
                fill('#e81c8c')
            } else if (matrix[y][x] == 6) {
                fill('aqua')
            }
            else {
                fill('#acacac')
            }
            rect(x * side, y * side, side, side)
        }
    }
    

}
socket.on("send matrix", changeColors)
let newGrass = document.getElementById('newGrass')
newGrass.addEventListener("click",function(){
    socket.emit("send btn",true)
})
let newEater = document.getElementById('newEater')
newEater.addEventListener("click",function(){
    socket.emit("send btn",true)
})
let newPredator = document.getElementById('newPredator')
newPredator.addEventListener("click",function(){
    socket.emit("send btn",true)
})
let newBoss = document.getElementById('newBoss')
newBoss.addEventListener("click",function(){
    socket.emit("send btn",true)
})
let newWater = document.getElementById('newWater')
newWater.addEventListener("click",function(){
    socket.emit("send btn",true)
})
let newQueen = document.getElementById('newQueen')
newWater.addEventListener("click",function(){
    socket.emit("send btn",true)
})
socket.on ("send datas", function(counts){
    
    document.getElementById("grass").innerHTML = 'Grass: ' + counts.grass;
    document.getElementById("grassEater").innerHTML = 'Grass Eaters: ' + counts.grassEater;
    document.getElementById("predator").innerHTML = 'Predators: ' + counts.predator;
    document.getElementById("boss").innerHTML = 'Bosses: ' + counts.boss;
    document.getElementById("queen").innerHTML = 'Queen: ' + counts.queen;
    document.getElementById("water").innerHTML = 'Water: ' + counts.water;

  })
  const startTime = Date.now();
const timeCounter = document.getElementById('time');

setInterval(() => {
  const elapsedTime = new Date(Date.now() - startTime);
  const minutes = elapsedTime.getMinutes();
  const seconds = elapsedTime.getSeconds().toString().padStart(2, '0');
  const time = `${minutes}:${seconds}`;

  timeCounter.innerText = time;
  
  socket.emit('elapsedTime', time);
}, 1000);
