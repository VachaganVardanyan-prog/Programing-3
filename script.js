
var matrix = [
    // [3, 5, 1, 3, 0],
    // [1, 0, 0, 0, 0],
    // [0, 1, 4, 3, 0],
    // [0, 0, 1, 2, 2],
    // [1, 1, 0, 2, 0],
    // [1, 1, 2, 2, 2],
    // [1, 1, 0, 0, 2]
];

var side = 10;
var n = 60;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var hunterArr = [];
var bomberArr = [];
// var lolArr = ["Ame","Ane"];
// var lollArr = ["bf","pjj"];
// var loArr = ["Aere","Aznse"];

var gr;

function setup() {
    frameRate(20);
    for(var y = 0; y<n;y++){
        matrix[y] = [];
        for(var x = 0;x<n ;x++){
            matrix[y][x] = random([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,3,3,3,4,5])
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                grassArr.push(gr);

            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y, 2)
                xotakerArr.push(xt);
            }
            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y, 3)
                gishatichArr.push(gt);
            }
             else if (matrix[y][x] == 5) {
                var hr = new Hunter(x, y, 5)
                hunterArr.push(hr);
            }
            else if (matrix[y][x] == 4) {
                var br = new Bomber(x, y, 4)
                bomberArr.push(br);
            }
        }
    }
}
//var eatArr = grassArr.concat(xotakerArr, gishatichArr, hunterArr);
// console.log(eatArr);
// for (var y = 0; y <earArr.length y++) {
//         for (var x = 0; x < earArr[y].length; x++) {
    

//         }

//     }
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
             else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#FF8300");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        //xotakerArr[i].mu();
    }
    for (var i in gishatichArr) {
            gishatichArr[i].eat();
    }
    for (var i in hunterArr) {
        hunterArr[i].eat();
    }
     for (var i in bomberArr) {
        bomberArr[i].move();
    }
}
// console.log(grassArr);