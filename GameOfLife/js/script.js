// function matGen(matrixSize, grassCount, grEatCount, prCount, boss, queen) {
//     let matrix = []
//     for (let i = 0; i < matrixSize; i++) {
//         matrix[i] = []
//         for (let j = 0; j < matrixSize; j++) {
//             matrix[i][j] = 0
//         }
//     }
//     for (let i = 0; i < grassCount; i++) {
//         let x = Math.floor(Math.random() * matrixSize)
//         let y = Math.floor(Math.random() * matrixSize)
//         if (matrix[y][x] == 0) {
//             matrix[y][x] = 1
//         }
//     }
//     for (let i = 0; i < grEatCount; i++) {
//         let x = Math.floor(Math.random() * matrixSize)
//         let y = Math.floor(Math.random() * matrixSize)
//         if (matrix[y][x] == 0) {
//             matrix[y][x] = 2
//         }
//     }
//     for (let i = 0; i < prCount; i++) {
//         let x = Math.floor(Math.random() * matrixSize)
//         let y = Math.floor(Math.random() * matrixSize)
//         if (matrix[y][x] == 0) {
//             matrix[y][x] = 3
//         }
//     }
//     for (let i = 0; i < boss; i++) {
//         let x = Math.floor(Math.random() * matrixSize)
//         let y = Math.floor(Math.random() * matrixSize)
//         if (matrix[y][x] == 0) {
//             matrix[y][x] = 4
//         }
//     }
//     for (let i = 0; i < queen; i++) {
//         let x = 15
//         let y = 15
//         if (matrix[y][x] == 0) {
//             matrix[y][x] = 5
//         }
//     }
//     return matrix
// }

// let matrix = matGen(30, 15, 10, 20, 4, 1)

// var grassArr = []
// var grassEaterArr = []
// var prArr = []
// var bossArr = []
// var queenArr = []

var side = 27
const socket = io()

function setup() {
    frameRate(10)
    createCanvas(27 * side, 27 * side)
    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 1) {
    //             var gr = new Grass(x, y)
    //             grassArr.push(gr)
    //         } else if (matrix[y][x] == 2) {
    //             var grEat = new GrassEater(x, y)
    //             grassEaterArr.push(grEat)
    //         } else if (matrix[y][x] == 3) {
    //             var pret = new Predator(x, y)
    //             prArr.push(pret)
    //         }
    //         else if (matrix[y][x] == 4) {
    //             var bs = new Boss(x, y)
    //             bossArr.push(bs)
    //         }
    //         else if (matrix[y][x] == 5) {
    //             var que = new Queen(x, y)
    //             queenArr.push(que)
    //         }
    //     }
    // }
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
    // for (var i in grassArr) {
    //     grassArr[i].mul()
    // }
    // for (let j in grassEaterArr) {
    //     grassEaterArr[j].mul()
    //     grassEaterArr[j].eat()

    // }
    // if (grassEaterArr == 0 && prArr == 0 && bossArr == 0 && queenArr == 0) {
    //     theend()
    //     if (grassEaterArr != 0 && queenArr != 0 && grassArr != 0 && bossArr == 0 && prArr == 0) {
    //         for (let j in grassEaterArr) {
    //             grassEaterArr[j].mul()
    //             grassEaterArr[j].eat()
    //         }

    //     }
    // }
    // if (grassEaterArr != 0 && prArr == 0 && bossArr == 0 && queenArr == 0) {
    //     for (let i in grassEaterArr) {
    //         grassEaterArr[i].die()
    //     }
    // }
    // for (let p in prArr) {
    //     prArr[p].mul()
    //     prArr[p].eat()
    // }
    // for (let b in bossArr) {
    //     bossArr[b].eat()
    //     if (queenArr != 0 && bossArr != 0 && grassArr != 0 && prArr == 0 && grassEaterArr == 0) {
    //         bossArr[b].mul()
    //     }
    // }
    // if (queenArr != 0 && grassArr == 0 && bossArr != 0 && prArr == 0 && grassEaterArr == 0) {
    //     for (var q in queenArr) {
    //         queenArr[q].mul()
    //         queenArr[q].eat()
    //     }
    // } else if (queenArr != 0 && bossArr == 0 && grassEaterArr != 0) {
    //     for (let q in queenArr) {
    //         queenArr[q].die()
    //     }
    // }
    // if (grassArr == 0 && grassEaterArr == 0 && bossArr == 0) {
    //     var x = 0
    //     var y = 0
    //     matrix[y][x] = 5
    //     queenArr.push(new Queen(x, y))
    // }
    // if (matrix[0][0] == 5 && bossArr == 0 && grassEaterArr == 0) {
    //     let x = 0
    //     let y = 0
    //     grassArr.push(new Grass(x, y))
    // }
    // if (grassArr != 0 && queenArr != 0 && bossArr == 0 && prArr == 0 && grassEaterArr == 0) {
    //     let x = 10
    //     let y = 10
    //     for (var i = 0; i < 3; i++) {
    //         grassEaterArr.push(new GrassEater(x, y))
    //         prArr.push(new Predator(x + 5, y + 5))
    //     }


    // }

}


socket.on("send matrix", changeColors)

