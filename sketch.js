let lista = [];
let numeroElementos = 15;
let x = 0;
let xDosElementos = 100;
let yDosElementos = 80;

function setup() {
    createCanvas(1800, 900);
    background(150, 20, 200);
    let onde = 0;
    for (let i = 0; i < numeroElementos; i++) {
        lista[i] = new Retangulo(onde);
        onde = onde + xDosElementos + 1;

    }





}

function draw() {
    background(150, 20, 200);
    noStroke();
    fill(200, 122, 200, 100);
    ellipse(x, x, 200);
    let rand = floor(random(0, numeroElementos));
    lista[rand].change();
    for (let i = 0; i < numeroElementos; i++) {
        lista[i].show();

    }

    x++;


}

function mouseClicked() {
    background(10, 20500, 200);
    fill(0, 0, 250);
}

class Retangulo {



    constructor(x) {
        this.x = x;
        this.verde;
    }

    change() {
        if (this.verde) {
            this.verde = false;
        } else {
            this.verde = true;
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        if (this.verde) {
            fill(0, 255, 0);
        } else {
            fill(255, 255, 250);
        }

        rect(this.x, height / 2, xDosElementos, yDosElementos);
    }
}