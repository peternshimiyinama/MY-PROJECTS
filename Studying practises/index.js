function MyFunction(){
    document.getElementById("Demo").textContent=Date()
    document.getElementById("Demo").style.fontSize="14px";
    document.getElementById("Demo").style.color="tomato";
    document.getElementById("Demo").style.backgroundColor="green"
}
function light(Num){
    var Ligh;
    if(Num==0){
       Ligh="images/Light_off.jpeg"
    }
    else{
       Ligh="images/Light_on.jpeg"
    }
    document.getElementById("Lighting_magic").src=Ligh
}


function playPause(){

    var myVideo = document.getElementById("video1");
    if(myVideo.paused)
         myVideo.play();

    else
        myVideo.pause();
    
}

function playBig(){

    var myVideo = document.getElementById("video1");
    myVideo.width = 560;
}

function playSmall(){

    var myVideo = document.getElementById("video1");

    myVideo.width = 320;
}

function playMedium(){

    var myVideo = document.getElementById("video1");

    myVideo.width = 460;
}

function remove(){

    document.getElementById("image1").style.display="none";
}
function hide(){

    document.getElementById("image2").style.visibility="hidden";
}
function reset(){

    document.getElementById("image1").style.display="block";
    document.getElementById("image2").style.visibility="visible";
}

function display(){

    document.getElementById("display").style.display="block";
    
}