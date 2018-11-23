
var matrix = [
    // [3, 5, 1, 3, 0],
    // [1, 0, 0, 0, 0],
    // [0, 1, 4, 3, 0],
    // [0, 0, 1, 2, 2],
    // [1, 1, 0, 2, 0],
    // [1, 1, 2, 2, 2],
    // [1, 1, 0, 0, 2]
];

var side = 15;
var n = 60;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var hunterArr = [];
var bomberArr = [];
var dinoArr = [];
var amenakerArr = [];
var exan;
var socket = io();

// var lolArr = ["Ame","Ane"];
// var lollArr = ["bf","pjj"];
// var loArr = ["Aere","Aznse"];

var gr;

function setup() {
    frameRate(5);
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5])
        }
    }


//     matrix = [ 
//         [2,0,0,1,1],
//         [2,0,0,1,1],
//         [2,0,0,1,1],
//         [0,0,0,1,1],
//         [0,0,0,1,1]
//    ]

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
            else if (matrix[y][x] == 6) {
                var ar = new Dino(x, y)
                dinoArr.push(ar);
            }

        }
    }
}

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
            else if (matrix[y][x] == 6) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }

        }
    }

    drawmatrix();
    for (var i in grassArr) {
        if (exan == "ՁՄԵՌ") {
        grassArr[i].mul(0);
       
    }
    else if (exan == "ԳԱՐՈՒՆ"){
        grassArr[i].mul(1.5);
    }
    else if (exan == "ԱՄԱՌ"){
        grassArr[i].mul(2.5);
    }
    else if (exan == "ԱՇՈՒՆ"){
        grassArr[i].mul(3.5);
    }

        
    }
    

    for (var i in xotakerArr) {
        if (exan == "ՁՄԵՌ") {
            xotakerArr[i].eat();
            //փոփոխությունը class.eatgrass.js_ի մեջ )))            

        }
        else if (exan == "ԳԱՐՈՒՆ") {
            xotakerArr[i].eat();
            //փոփոխությունը class.eatgrass.js_ի մեջ )))
        }
        else if (exan == "ԱՄԱՌ") {
            xotakerArr[i].eat();
            //փոփոխությունը class.eatgrass.js_ի մեջ )))
        }
        else if (exan == "ԱՇՈՒՆ") {
            xotakerArr[i].eat();
            //փոփոխությունը class.eatgrass.js_ի մեջ )))
        }
    }


    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        //փոփոխությունը class.predator.js_ի մեջ )))
    }
    for (var i in hunterArr) {
        if (exan == "ՁՄԵՌ") {
            hunterArr[i].move();
        }
        else {
            hunterArr[i].eat();
        }

    }
    for (var i in bomberArr) {
        if (exan == "ՁՄԵՌ") {
            //bomberArr[i].move();
            //Ձմռանը բոմբեռը չի շարժվում

        }
        else if (exan == "ԳԱՐՈՒՆ") {
            bomberArr[i].move();
        }
        else if (exan == "ԱՄԱՌ") {
            bomberArr[i].move();
        }
        else if (exan == "ԱՇՈՒՆ") {
            bomberArr[i].move();
        }

    }
    for (var i in dinoArr) {

        if (exan == "ՁՄԵՌ") {
            dinoArr[i].eat();
             
        }

        else if (exan == "ԳԱՐՈՒՆ") {
            dinoArr[i].eat();
        }

        else if (exan == "ԱՄԱՌ") {
            dinoArr[i].eat();
        }

        else if (exan == "ԱՇՈՒՆ") {
            //dinoArr[i].eat();
            //Դինո_ն աշնանը չի 
        }
    }


    //////////////////////////////////////      Statistika     //////////////////////////////////
    if (exan == "ԱՇՈՒՆ") {
        console.log("dasas");
        var kadr = {
            "xotakerneri qanaky-": xotakerArr.length,
            "grassi qanaky-": grassArr.length

        };
        var myJSON = JSON.stringify(kadr);
        function handleSubmit(evt) {
            socket.emit("send statistics", myJSON);
        }
        handleSubmit();
    }

}
function drawmatrix() {
    var p = document.getElementById("p");


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (frameCount % 40 > 0 && frameCount % 40 <= 10) {

                //dzmer



                if (matrix[y][x] == 1) {
                    fill("white");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 6) {
                    fill("pink");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }

                else if (matrix[y][x] == 4) {
                    fill("blue");
                }
                else if (matrix[y][x] == 5) {
                    fill("#FF8300");
                }
                exan = "ՁՄԵՌ";
                p.innerText = "ՁՄԵՌ";


                rect(x * side, y * side, side, side);
            }
            else if (frameCount % 40 > 10 && frameCount % 40 <= 20) {
                //garun
                if (matrix[y][x] == 1) {
                    fill("#ACFF33");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 6) {
                    fill("pink");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }

                else if (matrix[y][x] == 4) {
                    fill("blue");
                }
                else if (matrix[y][x] == 5) {
                    fill("#FF8300");
                }
                exan = "ԳԱՐՈՒՆ";
                p.innerText = "ԳԱՐՈՒՆ";

                rect(x * side, y * side, side, side);

            }
            else if (frameCount % 40 > 20 && frameCount % 40 <= 30) {
                //amar
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 6) {
                    fill("pink");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }

                else if (matrix[y][x] == 4) {
                    fill("blue");
                }
                else if (matrix[y][x] == 5) {
                    fill("#FF8300");
                }
                exan = "ԱՄԱՌ";
                p.innerText = "ԱՄԱՌ";

                rect(x * side, y * side, side, side);

            }
            else if (frameCount % 40 > 30 && frameCount % 40 <= 40) {

                //ashun
                if (matrix[y][x] == 1) {
                    fill("#FF4A06");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 6) {
                    fill("pink");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }

                else if (matrix[y][x] == 4) {
                    fill("blue");
                }
                else if (matrix[y][x] == 5) {
                    fill("#FF8300");
                }
                exan = "ԱՇՈՒՆ";
                p.innerText = "ԱՇՈՒՆ";

                rect(x * side, y * side, side, side);

            }
            else {
                //console.log(frameCount)
            }
        }
    }
}