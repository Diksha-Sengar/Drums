var numberOfKeys = document.querySelectorAll(".drum").length;;
for(var i = 0; i < numberOfKeys;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    CreateSound(this.innerHTML);
    ChangeImage(this.innerHTML);
  })
}

document.addEventListener("keydown",function(event){
  CreateSound(event.key);
  ChangeImage(event.key);
})

function CreateSound(key)
{
  switch(key)
  {
    case 'w':
       var audio = new Audio("sounds/crash.mp3");
       audio.play();
    break;
    case 'a':
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case 's':
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case 'd':
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case 'j':
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case 'k':
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case 'l':
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    default:
  }
}

function ChangeImage(key)
{
  var ClassOfKey = document.querySelector("."+key).classList;
  ClassOfKey.add("pressed");
  setTimeout(function () {
    ClassOfKey.remove("pressed");
  }, 200);
}
