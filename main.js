

function setup(){
    canvas = createCanvas(300,290);
    canvas.position(480,250);
    canvas.center()
}

function preload()
{
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}

function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,300,290);

}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}