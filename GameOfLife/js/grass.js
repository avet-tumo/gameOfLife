class Grass {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    mul() {
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = random(emptyCell)
        if (newCell && this.multiply >= 4) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 1
            var gr = new Grass(newX, newY)
            grassArr.push(gr)
            this.multiply = 0
        }
    }
}