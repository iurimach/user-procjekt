var audio1=document.querySelector("#audio1")

function usernameaudio(){
    audio1.play();
}

var audio2=document.querySelector("#audio2")
function passwordaudio(){
    audio2.play();
}

var audio3=document.querySelector("#audio3")
function autorizaciaaudio(){
    audio3.play();
}
var audio4=document.querySelector("#audio4")
function zari112audio(){
    audio4.play();
}

var audio5=document.querySelector("#audio5")
function policeaudio(){
    
    audio5.play();
    
}



function dialogfunc(){
    var dialog=document.querySelector("#dialog")
    dialog.style.display="block"
    audio3.play();
$(document).ready(function() {
    
    $('#open-dialog').click(function() {
      $('#dialog').fadeIn();
    });
  
    $('#close-dialog').click(function(e) {
        e.preventDefault();
      $('#dialog').fadeOut();
    });
    
  });
}
  var avtorizacia=document.querySelector("#open-dialog")
  avtorizacia.addEventListener('click', dialogfunc)
  
  var dialog2=document.querySelector("#dialog2")
  dialog2.addEventListener('click', dialogfunc2)

  function dialogfunc2(){
    alert("112-ში რამ დაგარეკინა? ? ? :D :D :D :D ")
   
   

    function animateBackgroundColor() {
        var colors = ["red", "blue", ]; // Define an array of colors to cycle through
        var currentIndex = 0; // Variable to keep track of the current color index
      
        setInterval(function() {
          document.body.style.backgroundColor = colors[currentIndex]; 
          
      
          currentIndex++; 
      
        
          if (currentIndex >= colors.length) {
            currentIndex = 0;
          }
        }, 1000); 
      }
      animateBackgroundColor();
      
  }