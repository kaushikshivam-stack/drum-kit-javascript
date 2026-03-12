// counter variable 
var hitCount = 0;

// sound map
var sounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};





// button click
var drums = document.querySelectorAll(".drum");

drums.forEach(function(button){

  button.addEventListener("click", function(){

    var key = this.innerHTML;

    playSound(key);
    buttonAnimation(key);
    updateCounter();

     document.getElementById("current-key").textContent =
    "You clicked: " + key.toUpperCase();

  });

});


// keyboard press
document.addEventListener("keydown", function(event){

  var key = event.key.toLowerCase();

  playSound(key);
  buttonAnimation(key);
  updateCounter();

  document.getElementById("current-key").textContent =
  "You pressed: " + key.toUpperCase();

});


// play sound
function playSound(key){

  if(sounds[key]){
    new Audio(sounds[key]).play();
  }

}


// animation
function buttonAnimation(key){

  var activeButton = document.querySelector("." + key);

  if(activeButton){

    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);

  }

}


// hitcounter 

function updateCounter(){

  hitCount++;

  document.getElementById("hit-counter").textContent =
  "Drum Hits: " + hitCount;

}


