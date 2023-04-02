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
let newQueen = document.getElementById('newQueen')
newQueen.addEventListener("click",function(){
    socket.emit("send btn",true)
})
socket.on ("send datas", function(counts){
    
    document.getElementById("grass").innerHTML = counts.grass;
    document.getElementById("grassEater").innerHTML = counts.grassEater;
    document.getElementById("predator").innerHTML = counts.predator;
    document.getElementById("boss").innerHTML = counts.boss;
    document.getElementById("queen").innerHTML = counts.queen;
    document.getElementById("water").innerHTML = counts.water;

  })