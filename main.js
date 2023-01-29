function preload(){}

function setup(){
   canvas = createCanvas(400, 350)
   canvas.center()
   //Video
   video = createCapture(VIDEO);
   video.size(400, 350);
   video.hide();
   //PoseNet
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses)
}

function modelLoaded(){
   console.log("PoseNet is Initialized...");
}

var x;
var y;
function gotPoses(results){
   if (results.length > 0){
      console.log(results)
      x = results[0].pose.nose.x;
      y = results[0].pose.nose.y;
      console.log("Nose X = "+x);
      console.log("Nose Y = "+y);
   }
}

function draw(){
   image(video, 0, 0, 400, 350)
   fill('red');
   ellipse(x, y, 30, 35);
   noStroke();
   fill('white');
   circle(x - 5, y - 5, 5);
}

function take_snapshot(){
   save('myFilterImage.png');
}