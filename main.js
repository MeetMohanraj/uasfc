Status = "";
fan_image = "";
al ="";



function preload(){
    

    
    fan_image = loadImage("sweet-little-baby-sleeping-his-bed-hugging-teddy-bear-colorful-cartoon-character-vector-illustration-isolated-white-93948465.jpeg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

    
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}
function baby(){
    image(fan_image,0,0,640,350);
    
      
            

            
        }
    
