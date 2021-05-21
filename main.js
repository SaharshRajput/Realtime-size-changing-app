noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,400);
    canvas.position(560,150);
     
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("Model is loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X="+noseX+" Nose Y="+noseY);
        leftWistX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWistX-rightWristX);
        console.log("Left Wrist X="+leftWistX+" Right Wrist X="+rightWristX+" Difference="+difference);

    }
}
function draw()
{
background("#CD5C5C");
document.getElementById("square_side").innerHTML="Width and height of the square is = "+difference+"px";
fill("#F90093");
stroke("#F90093");
square(noseX,noseY,difference);
}
