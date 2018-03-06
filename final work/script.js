var matrix = [];
function nms(n, m) {  
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < m; j++) {
            matrix[i].push(0);
        }
    }
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < m; j++) {
            matrix[i].push(Math.floor(Math.random() * 2));
        }
    }    
    for (var i = 1; i <= 10; i++) {
        var yx = Math.floor(Math.random() * matrix.length);
        var xx = Math.floor(Math.random() * matrix[yx].length);
        matrix[yx][xx] = 2;
    }
    for (var i = 1; i <= 13; i++) {
        var yg = Math.floor(Math.random() * matrix.length);
        var xg = Math.floor(Math.random() * matrix[yg].length);
        matrix[yg][xg] = 3;
    }
    for (var i = 1; i <= 15; i++) {
        var yg = Math.floor(Math.random() * matrix.length);
        var xg = Math.floor(Math.random() * matrix[yg].length);
        matrix[yg][xg] = 4;
    }
    for (var i = 1; i <= 15; i++) {
        var yg = Math.floor(Math.random() * matrix.length);
        var xg = Math.floor(Math.random() * matrix[yg].length);
        matrix[yg][xg] = 5;
    }
    var s1 = (n/2-1),s2 = (m/2-1);
    matrix[s1][s2] = 6;
}

var grassArr = [],
    side = 14,
    xotaker = [],
    gishatichner = [],
    mardik = [],
    vorsordner = [],
    gen = [];

nms(40, 40);

function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xk = new Xotaker(x, y);
                xotaker.push(xk);
            }
            else if (matrix[y][x] == 3) {
                var gish = new gishatich(x, y);
                gishatichner.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var mrd = new mard(x, y);
                mardik.push(mrd);
            }
            else if (matrix[y][x] == 5) {
                var vrsrd = new vors(x, y);
                vorsordner.push(vrsrd);
            }
            else if (matrix[y][x] == 6) {
                var gr = new generator(x, y);
                gen.push(gr);
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#ed8c72");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotaker) {
        xotaker[i].utel();
        xotaker[i].bazmanal();
        xotaker[i].satkel();
    }
    for (var i in gishatichner) {
        gishatichner[i].utel();
        gishatichner[i].bazmanal();
        gishatichner[i].satkel();
    }
    for (var i in mardik) {
        mardik[i].utel();
        mardik[i].bazmanal();
        mardik[i].satkel();
    }
    for (var i in vorsordner) {
        vorsordner[i].utel();
        vorsordner[i].bazmanal();
        vorsordner[i].satkel();
    }
    for (var i in gen) {
        gen[i].bazmanal();
    }
}