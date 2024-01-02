//Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((display) =>{
    let startValue = 0;
    let endValue = parseInt(display.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue++;
        display.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});


$(function(){

    //mobile menu toggler
    // $('#menutoggle').click(function(){
    //     $('.mobilemenu').toggleClass('active');
    // })


})

//slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 8 seconds
}

//sub menus


//about menu
$(document).ready(function() {
    var timeout;
    
    $('#aboutMenu, #about-menu').hover(
      function() {
        clearTimeout(timeout);
        $('#about-menu').slideDown('fast');
      },
      function() {
        timeout = setTimeout(function() {
          $('#about-menu').slideUp('fast');
        }, 200);
      }
    );
    
    $('#about-menu').on('mouseleave', function() {
      timeout = setTimeout(function() {
        $('#about-menu').slideUp('fast');
      }, 200);
    });
  });
  

//event menu
$(document).ready(function() {
  var timeout;
  
  $('#eventsMenu, #event-menu').hover(
    function() {
      clearTimeout(timeout);
      $('#event-menu').slideDown('fast');
    },
    function() {
      timeout = setTimeout(function() {
        $('#event-menu').slideUp('fast');
      }, 200);
    }
  );
  
  $('#event-menu').on('mouseleave', function() {
    timeout = setTimeout(function() {
      $('#event-menu').slideUp('fast');
    }, 200);
  });
});

//contact menu
$(document).ready(function() {
  var timeout;
  
  $('#contactMenu, #contact-menu').hover(
    function() {
      clearTimeout(timeout);
      $('#contact-menu').slideDown('fast');
    },
    function() {
      timeout = setTimeout(function() {
        $('#contact-menu').slideUp('fast');
      }, 200);
    }
  );
  
  $('#contact-menu').on('mouseleave', function() {
    timeout = setTimeout(function() {
      $('#contact-menu').slideUp('fast');
    }, 200);
  });
});