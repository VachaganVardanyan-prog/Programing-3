class Amenaker extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 30;
    }

    chooseCellmul(character) {
        this.getNewCoordinates();
        return super.chooseCellmul(character);
    }
    move() {
        //TODO: change
        var emptyCells = this.chooseCellmul([0, 1, 2, 3]);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy -= 2;
        }
    }
    eat() {
        this.getNewCoordinates();
        var foodCells = this.chooseCellmul([1, 2, 3, 4]);
        var newCell = random(foodCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            if (matrix[newCell[1]][newCell[0]] == 3) {
                for (var i in gishatichArr) {
                    gishatichArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
            else if (matrix[newCell[1]][newCell[0]] == 2) {
                for (var i in xotakerArr) {
                    xotakerArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
            else if (matrix[newCell[1]][newCell[0]] == 1) {
                for (var i in grassArr) {
                    grassArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }

            else if (matrix[newCell[1]][newCell[0]] == 4) {
                for (var i in bomberArr) {
                    bomberArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
            matrix[newCell[1]][newCell[0]] = 6;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        if (this.energy >= 0 || this.energy <= 0) {
            this.move();
        }
    }
}