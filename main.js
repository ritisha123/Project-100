var SpeechRecognition = window.webkitSpeechRecognition;
var content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult=function(event)
{

    console.log(event);
    var content =event.results[0][0].transcript;
    console.log(content);
    if(content=="selfie"){
        console.log("Taking your selfie in 2 seconds");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next Selfie in 2 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){
        img_id="selfie1"
        take_snapshot();
        speak_data = "Taking your next Selfie in 2 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },2000);
    setTimeout(function(){
        img_id="selfie2"
        take_snapshot();
        speak_data = "Taking your next Selfie in 4 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },4000);
    setTimeout(function(){
        img_id="selfie3"
        take_snapshot();
        speak_data = "Taking your next Selfie in 8 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },8000);
}
function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id =="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie"src="'+data_uri+'"/>';
        }
        if(img_id =="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie"src="'+data_uri+'"/>';
        }
        if(img_id =="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie"src="'+data_uri+'"/>';
        }
    });

}