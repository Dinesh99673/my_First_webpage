//alert("yess");
var j = document.querySelectorAll(".drum").length;
for(var i=0;i<j;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        handleClick(this.innerHTML);
        buttonAnimetion(this.innerHTML);
    });
}
document.addEventListener("keydown",function(event){
    handleClick(event.key);
    buttonAnimetion(event.key);
});
function handleClick(key){
    switch(key){
    case 'w':{
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    }
    case 'a':{
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    }
    case 's':{
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    }
    case 'd':{
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    }
    case 'j':{
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    }
    case 'k':{
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    }
    case 'l':{
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    }
    default:{
        return;
    }
    }
}
function buttonAnimetion(currentKey){
    var activateButton = document.querySelector("."+currentKey);
    activateButton.classList.add("pressed");
    setTimeout(function(){
        activateButton.classList.remove("pressed");
    },100);
};