function booking(){
     var ticket=document.getElementById("buyticket");
     var bodycolor=document.getElementById("top");
     ticket.style.visibility="visible";
     bodycolor.style.backgroundColor="rgba(0,0,0,0.5)";
}
function remove(){
    var ticket=document.getElementById("buyticket");
    var bodycolor=document.getElementById("top");
    ticket.style.visibility="hidden";
    bodycolor.style.backgroundColor="";
}