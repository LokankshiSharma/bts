var img = "";

function setup(){
    canvas= createCanvas(600, 400);
    canvas.position(360, 190);

}

function preload(){
    img = loadImage("bts-img.jpg");
}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("green");
    text ("V", 110, 85);
    noFill();
    stroke ("white");
    rect(20, 10, 150, 350);
    fill("black");
    text ("Suga", 180, 110);
    textSize(25);
    noFill();
    rect(170, 10, 130, 250);
    fill("blue");
    text ("Jin", 315, 110);
    noFill();
    stroke ("white");
    rect(300, 10, 75 , 230);
    fill("pink");
    text ("RM", 390, 110);
    noFill();
    stroke ("white");
    rect(375, 10, 80, 230);
    fill("green");
    text ("J-Hope", 470, 110);
    noFill();
    stroke ("white");
    rect(455, 10, 150, 350);
    fill("black");
    text ("Jungkook", 190, 350);
    textSize(25);
    noFill();
    rect(170, 140, 150, 280);
    fill("blue");
    text ("Jimin", 350, 350);
    textSize(25);
    noFill();
    rect(170, 140, 150, 280);
    fill("blue");
    }

