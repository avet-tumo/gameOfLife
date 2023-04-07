var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs')

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);
// function theEnd() {
//     for (var i = 8; i < 13; i++) {
//         matrix[6][i] = 3
//     }
//     matrix[8][15] = 5
//     for (var i = 6; i < 11; i++) {
//         matrix[i][10] = 3
//         matrix[i][14] = 3
//         matrix[i][16] = 3
//         matrix[i][18] = 3
//     }
//     for (var i = 6; i < 12; i += 2) {
//         matrix[i][19] = 3
//         matrix[i][20] = 3
//     }
//     for (var i = 13; i < 18; i++) {
//         matrix[i][9] = 3
//         matrix[i][13] = 3
//         matrix[i][16] = 3
//         matrix[i][18] = 3
//     }
//     for (var i = 13; i < 19; i += 2) {
//         matrix[i][10] = 3
//         matrix[i][11] = 3
//     }
//     for (var i = 14; i < 16; i++) {
//         matrix[i][i] = 3
//     }
//     matrix[13][19] = 3
//     matrix[17][19] = 3
//     for (var i = 14; i < 17; i++) {
//         matrix[i][20] = 3
//     }
// }
function matGen(matrixSize, grassCount, grEatCount, prCount, boss, queen, water) {
    let matrix = []
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0
        }
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEatCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < prCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < boss; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < queen; i++) {
        let x = 14
        let y = 13
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < water; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }
    io.emit("send matrix", matrix)
    return matrix
}

matrix = matGen(30, 25, 25, 20, 4, 1, 15)
side = 30
grassArr = []
grassEaterArr = []
prArr = []
bossArr = []
queenArr = []
waterArr = []
const Grass = require('./js/grass')
const GrassEater = require('./js/grasseater')
const Boss = require('./js/boss')
const Predator = require('./js/predator')
const Queen = require('./js/queen')
const Water = require('./js/water')
function newObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pret = new Predator(x, y)
                prArr.push(pret)
            }
            else if (matrix[y][x] == 4) {
                var bs = new Boss(x, y)
                bossArr.push(bs)
            }
            else if (matrix[y][x] == 5) {
                var que = new Queen(x, y)
                queenArr.push(que)
            }
            else if (matrix[y][x] == 6) {
                var wt = new Water(x, y)
                waterArr.push(wt)
            }
        }
    }
}
newObject()
function addGrass() {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] === 0) { 
        matrix[y][x] = 1;
        var gr = new Grass(x, y);
        grassArr.push(gr);
        io.emit("send matrix", matrix);
    }
}

function addEater() {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] === 0) { 
        matrix[y][x] = 2;
        var grEat = new GrassEater(x, y);
        grassEaterArr.push(grEat);
        io.emit("send matrix", matrix);
    }
}

function addPredator() {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] === 0) {
        matrix[y][x] = 3;
        var pret = new Predator(x, y);
        prArr.push(pret);
        io.emit("send matrix", matrix);
    }
}

function addBoss() {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] === 0) { 
        matrix[y][x] = 4;
        var bs = new Boss(x, y);
        bossArr.push(bs);
        io.emit("send matrix", matrix);
    }
}

function addWater() {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] === 0) { 
        matrix[y][x] = 6;
        var wt = new Water(x, y);
        waterArr.push(wt);
        io.emit("send matrix", matrix);
    }
}
function addQueen() {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    if (matrix[y][x] === 0) {
        matrix[y][x] = 5;
        var que = new Queen(x, y);
        queenArr.push(que);
        io.emit("send matrix", matrix);
    }
}

function cleanAll() {
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        matrix[y][x] = 0;
      }
    }

    grassArr = [];
    grassEaterArr = [];
    prArr = [];
    bossArr = [];
    waterArr = [];
    queenArr = [];
  
    io.emit("send matrix", matrix);
  }
  io.on("connection", function (socket) {
    socket.on("clean all", function() {
      cleanAll();
    });
  });
  
function gameMove() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (let j in grassEaterArr) {
        grassEaterArr[j].mul()
        grassEaterArr[j].eat()

    }
    for (let w in waterArr) {
        waterArr[w].mul()
        waterArr[w].attack()
        waterArr[w].move()
    }
    for (let p in prArr) {
        prArr[p].mul()
        prArr[p].eat()
    }
    for (let b in bossArr) {
        if (queenArr < 2) {
            bossArr[b].mul()
        } 
        bossArr[b].eat()
       
    }
    for (var q in queenArr) {
        if(bossArr != 0){
            queenArr[q].mul()
        }
        queenArr[q].eat()
    }
    io.emit("send matrix", matrix)
}
setInterval(gameMove, 200)

io.on('connection', function (socket) {
    socket.on("send btn", function (data) {
      if (data === "grass") {
        addGrass();
      } else if (data === "eater") {
        addEater();
      } else if (data === "predator") {
        addPredator();
      } else if (data === "boss") {
        addBoss();
      } else if (data === "water") {
        addWater();
      } else if (data === "queen") {
        addQueen();
      }
    });
  });
  
setInterval(function () {
    counts = {
        grass: grassArr.length,
        grassEater: grassEaterArr.length,
        predator: prArr.length,
        boss: bossArr.length,
        queen: queenArr.length,
        water: waterArr.length
    }

    fs.writeFile("statistics.json", JSON.stringify(counts), function () {
        io.emit("send datas", counts)
    })
}, 200);
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('elapsedTime', (time) => {
        io.emit('elapsedTime', time);
    });
});