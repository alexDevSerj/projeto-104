console.log("versão ml5",ml5.version)
Webcam.set({
  width:350,
  height:350,
  image_format:'png',
  png_quality:90
})

camera=document.getElementById('camera')
Webcam.attach('#camera');
function takeSnapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captura_img" src="'+data_uri+'"/>'
  })
}
classifier = ml5.imageClassifier('',modelLoaded)