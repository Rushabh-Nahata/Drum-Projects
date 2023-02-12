

for(var i=0; i<document.querySelectorAll(".drum").length ;i++){

  
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 
    
    var buttonInnerHTML=this.innerHTML;
    rushabh(buttonInnerHTML);
});
}

document.addEventListener("keypress",function(e){
rushabh(e.key)
});


    function rushabh(key){
          switch(key){
    case "a":
        var aa=new Audio("drum.wav");
        aa.play();
        break;

        case "b":
        var ba=new Audio("drum2.wav");
        ba.play();
        break;
        
        case "c":
        var ca=new Audio("drum3.wav");
        ca.play();
        break;

        case "d":
        var da=new Audio("drum1.wav");
        da.play();
        break;
        default:
            console.log(key);
}

}
