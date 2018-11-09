class Gishatich extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;


    }


    chooseCell(c) {
        this.getNewCoordinates();
        return super.chooseCell(c);
    }
    move() {
        var emptyCells = this.chooseCell(0);
        //console.log(emptyCells);
        var newCell = random(emptyCells);
        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy--;
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);
            this.energy = 7;
        }
    }
    eat() {
        this.getNewCoordinates();
        var gishatichCells = this.chooseCell(2);
        var newCell = random(gishatichCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;


            matrix[newCell[1]][newCell[0]] = 3;

            for (var i in xotakerArr) {

                if (newCell[0] == xotakerArr[i].x && newCell[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy++;
        }
        else {
            this.move();

        }
        if (this.energy >= 7) {
            this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
        // console.log(this.energy);
    }
    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }
}