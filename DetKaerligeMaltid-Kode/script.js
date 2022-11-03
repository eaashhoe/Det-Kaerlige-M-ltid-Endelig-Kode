// Progressbar - når brugeren scroller på siden, så skal myProgressBar køre 
window.onscroll = function() {
    myProgressBar()
};

function myProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//  Scroll down knap 
$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('.parallaxSectionOne').offset().top }, 'slow');
    return false;
  });
});

// Simones og info Video section afspilning, window onscroll
//tjekke på med if sætning, er du synlig så afspil video, er du ikke synlig så pause video
// de 250 fortæller af den bare skal være inden for 250 px 

document.addEventListener("scroll",myVideoFunction);
function myVideoFunction(){

    //logo video
        var infoVideo = document.getElementById("logoVideo");
            if (infoVideo.getBoundingClientRect().bottom < 250 || infoVideo.getBoundingClientRect().top > 250)
                infoVideo.pause();
            else
                infoVideo.play();

    //Simones video
        var mainVideo = document.getElementById("simoneVideo");
            if (mainVideo.getBoundingClientRect().bottom < 250 || mainVideo.getBoundingClientRect().top > 250)
                mainVideo.pause();
            else
                mainVideo.play();

  }

// typewriter effekt
      // set up text to print, each item in array is new line
      var aText = new Array(
        "Kære Birthe & familie", 
        "Velkommen til det kærlige måltid <3",
        "Vi håber i bliver rigtig glade for måltiderne",
        "og at de smager jer :D",
        "",
        "Kram fra Simone"
        );
        var iSpeed = 50; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
        
        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row

        var destination = document.getElementById("typedtext");
        if (destination.getBoundingClientRect().bottom > 150 || destination.getBoundingClientRect().top < 150)
            typewriter();
        else 
        destination.innerHTML = "";

        function typewriter(){
          sContents =  ' ';
          iRow = Math.max(0, iIndex-iScrollAt);
            while ( iRow < iIndex ) {
              sContents += aText[iRow++] + '<br />';
            }
              destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
          
            if ( iTextPos++ == iArrLength ) {
              iTextPos = 0;
              iIndex++;
                if ( iIndex != aText.length ) {
                iArrLength = aText[iIndex].length;
                setTimeout("typewriter()", 500);
                }

            } else {
                setTimeout("typewriter()", iSpeed);
            }

            if (iIndex == aText.length) {
              iIndex = 0;
              iTextPos = 0;
              sContents = '';
              setTimeout("typewriter()", 1500);
            }
        }

//madens rejse 
const scrollContainer = document.getElementById("horizontal-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});


// jQuery testimonial section 
      // click funktion
      $('.testimonial-pics img').click(function(){
        //fjerner class active, så billedet bliver sort/hvid 
        $(".testimonial-pics img").removeClass("active");
        //tilføjer active, så billedet bliver i farve 
        $(this).addClass("active");
        //fjerner testimonial class active, så man ikke kan se quote
        $(".testimonial").removeClass("active");
        //tilføjer active, så content bliver vist når man trykker på billede. 
        $("#"+$(this).attr("alt")).addClass("active");
      });

// CSS animation scroll
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

//scroll down button 
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

