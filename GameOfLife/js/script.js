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
const audio = document.querySelector("#audio");
document.querySelector("#newGrass").addEventListener("click", function() {
    audio.play();
  });
  document.querySelector("#newEater").addEventListener("click", function() {
    audio.play();
  });
  document.querySelector("#newPredator").addEventListener("click", function() {
    audio.play();
  });
  document.querySelector("#newBoss").addEventListener("click", function() {
    audio.play();
  });
  document.querySelector("#newWater").addEventListener("click", function() {
    audio.play();
  });
  document.querySelector("#newQueen").addEventListener("click", function() {
    audio.play();
  });
  document.querySelector("#cleanAll").addEventListener("click", function() {
    audio.play();
  });

  //weather
const springAudio = new Audio('../audio/spring.mp3');
const summerAudio = new Audio('../audio/summer.mp3');
const autumnAudio = new Audio('../audio/autumn.mp3');
const winterAudio = new Audio('../audio/winter.mp3');
const springButton = document.getElementById('spring');
const summerButton = document.getElementById('summer');
const autumnButton = document.getElementById('autumn');
const winterButton = document.getElementById('winter');

springButton.addEventListener('click', function() {
  springAudio.currentTime = 0; 
  springAudio.play(); 
  summerAudio.pause(); 
  autumnAudio.pause();
  winterAudio.pause();
});

summerButton.addEventListener('click', function() {
  summerAudio.currentTime = 0;
  summerAudio.play();
  springAudio.pause();
  autumnAudio.pause();
  winterAudio.pause();
});

autumnButton.addEventListener('click', function() {
  autumnAudio.currentTime = 0;
  autumnAudio.play();
  springAudio.pause();
  summerAudio.pause();
  winterAudio.pause();
});

winterButton.addEventListener('click', function() {
  winterAudio.currentTime = 0;
  winterAudio.play();
  springAudio.pause();
  summerAudio.pause();
  autumnAudio.pause();
});
springAudio.play();
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
socket.on("send matrix", changeColors)
let newGrass = document.getElementById('newGrass')
newGrass.addEventListener("click",function(){
    socket.emit("send btn",'grass')
})
let newEater = document.getElementById('newEater')
newEater.addEventListener("click",function(){
    socket.emit("send btn",'eater')
})
let newPredator = document.getElementById('newPredator')
newPredator.addEventListener("click",function(){
    socket.emit("send btn",'predator')
})
let newBoss = document.getElementById('newBoss')
newBoss.addEventListener("click",function(){
    socket.emit("send btn",'boss')
})
let newWater = document.getElementById('newWater')
newWater.addEventListener("click",function(){
    socket.emit("send btn",'water')
})
let newQueen = document.getElementById('newQueen')
newWater.addEventListener("click",function(){
    socket.emit("send btn",'queen')
})
let cleanAllBtn = document.getElementById("cleanAll");
cleanAllBtn.addEventListener("click", function() {
  socket.emit("clean all");
});