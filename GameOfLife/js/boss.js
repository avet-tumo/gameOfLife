class Boss {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 10
        this.multiply = 0
        this.directions = [

        ]
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y],
            [this.x, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 2],
            [this.x - 3, this.y],
            [this.x, this.y - 3],
            [this.x - 3, this.y - 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y + 3]
        ]
    }
    chooseCell(char1, char2, char3) {
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

        }

        return found;
    }
    mul() {
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = random(emptyCell)
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            var bs = new Boss(newX, newY)
            bossArr.push(bs)
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
        var emptyCells = this.chooseCell(1, 2, 3)
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
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in bossArr) {
            if (this.x == bossArr[i].x && this.y == bossArr[i].y) {
                bossArr.splice(i, 1)
                break
            }
        }
    }
}