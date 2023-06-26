var som;



function preload(){
    som=loadSound('musica1.mpeg')
}
function setup(){
    canvas=createCanvas(450,450)
video=createCapture(VIDEO)
video.size(450,450)
video.hide()

saitama=ml5.poseNet(video,modelReady)
saitama.on('pose',gotPose)
}
function modelReady(){
    console.log('Saitama esta pronto :)')
}
var ye=0;
var xe=0;
var yd=0;
var xd=0;
function gotPose(r){
if(r.length>0){
    console.log(r)
    ye=r[0].pose.leftWrist.y
    xe=r[0].pose.leftWrist.x
    yd=r[0].pose.rightWrist.y
    xd=r[0].pose.rightWrist.x

    if(ye<200){
        som.rate(0.5)
        document.getElementById('speed').innerHTML='VELOCIDADE:0.5X'
    }
    if(ye>200 && ye<300){
        som.rate(1)
        document.getElementById('speed').innerHTML='VELOCIDADE:1X'
    }
    if(ye>300 && ye<400){
        som.rate(1.5)
        document.getElementById('speed').innerHTML='VELOCIDADE:1.5X'
    }
    if(ye>400){
        som.rate(2)
        document.getElementById('speed').innerHTML='VELOCIDADE:2X'
    }
    
}
}

function draw(){
    canvas.background('white')
    canvas.position(windowWidth/2-225,height/2)

image(video,0,0,450,450)
fill('red')
circle(xe,ye,30)
fill('blue')
circle(xd,yd,30)

yd=floor(Number(yd))
volume=yd/500;
som.setVolume(volume)
document.getElementById('speed2').innerHTML='volume:'+ Math.round(volume*100)+"%";
}
function tok(){
    if(som.isPlaying()){
som.stop()
    }else{
        som.play()
    }
   
}

