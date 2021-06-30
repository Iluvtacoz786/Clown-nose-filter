function preload(){}
function draw(){
    image(video,0,0,700,700)

}
function setup(){
    canvas=createCanvas(700,700)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}