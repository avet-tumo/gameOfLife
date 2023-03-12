class Queen extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 20
        this.multiply = 0
        this.directions = []
    }
    getNewCoordinates() {
        let i = Math.floor(Math.random() * 20)
        this.directions = [
            [this.x - i, this.y - i],
            [this.x, this.y - i],
            [this.x + i, this.y - i],
            [this.x - i, this.y],
            [this.x + i, this.y],
            [this.x - i, this.y + i],
            [this.x, this.y + i],
            [this.x + i, this.y + i]
        ]

    }
    chooseCell(char1, char2, char3, char4) {
        this.getNewCoordinates()
        let found = []

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i]);
                }
            }

        }

        return found;
    }
    mul() {
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = random(emptyCell)
        if (newCell && this.multiply >= 6) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5
            var que = new Queen(newX, newY)
            queenArr.push(que)
            this.multiply = 0
        }
    }
    move() {
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
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    eat() {
        var emptyCells = this.chooseCell(1, 2, 3, 4)
        var newCell = random(emptyCells)
        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i = 0; i < prArr.length; i++) {
                if (prArr[i].x == this.x && prArr[i].y == this.y) {
                    prArr.splice(i, 1)
                }
            }
            for (let i = 0; i < bossArr.length; i++) {
                if (bossArr[i].x == this.x && bossArr[i].y == this.y) {
                    bossArr.splice(i, 1)
                }
            }
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in queenArr) {
            if (this.x == queenArr[i].x && this.y == queenArr[i].y) {
                queenArr.splice(i, 1)
                break
            }
        }
    }
}