model_status = "";

function preload(){
    img = loadImage("dartboard.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetected = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: The system is Detecting";
}

function modelLoaded(){
    console.log("model loaded");
    Status = true;
    objectDetected.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(video, 0, 0, 380,380);
  if (model_status != ""){
    objectDetector.detect(video, gotResult);
    r = random(255);
    g = random(255);
    b = random(255);
    for(i = 0; i < objects.length; i++){
      document.getElementById("status").innerHTML = "Status: Object(s) detected";
      document.getElementById("no_of_objects").innerHTML = "Number of Objects Detected is " + objects.length;
      fill(r,g,b);
      stroke(r,g,b);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent +"%", objects[i].x + 15,objects[i].y + 15);
      noFill();
      stroke(r,g,b);
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  }
}

function back(){
    window.location = "index.html";
}