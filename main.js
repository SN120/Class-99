var Speech_Recognisation = window.webkitSpeechRecognition;
var Recognisation = new Speech_Recognisation();

var camera = document.getElementById("camera");

function Start(){
    document.getElementById("textbox").innerHTML = "";
    Recognisation.start();
}
Recognisation.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    var speechData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speechData); 
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality:90
});