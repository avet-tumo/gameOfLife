let LivingCreature = require('./LivingCreature')
module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.multiply = 0
        this.energy = 16
        this.directions = []
    }


    mul() {
        this.multiply++
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            var pret = new Predator(newX, newY)
            prArr.push(pret)
            this.multiply = 0
        }
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)
        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.energy--
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    eat() {
        var emptyCells = this.chooseCell(2)
        var newCell = random(emptyCells)
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in prArr) {
            if (this.x == prArr[i].x && this.y == prArr[i].y) {
                prArr.splice(i, 1)
            }
        }
    }
}
