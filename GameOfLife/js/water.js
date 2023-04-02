let LivingCreature = require('./LivingCreature')
module.exports = class Water extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.life = 50
        this.directions = []
    }

    move() {
        this.life--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell && this.life >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in waterArr) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                waterArr.splice(i, 1)
            }
        }
    }
    mul() {
        this.multiply++
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)]
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            var wt = new Water(newX, newY)
            waterArr.push(wt)
            this.multiply = 0
        }
    }
    attack() {
        var grassEaterCells = this.chooseCell(2)
        for (var i in grassEaterCells) {
            var x = grassEaterCells[i][0]
            var y = grassEaterCells[i][1]
            for (var j in grassEaterArr) {
                if (grassEaterArr[j].x == x && grassEaterArr[j].y == y) {
                    grassEaterArr.splice(j, 1)
                    matrix[y][x] = 0
                    break
                }
            }
        }
    }
}
