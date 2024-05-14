gsap.from(".image1",{
    y:50,
    delay:0.5,
    opacity:0,
    duration:1.9,
    ease:"power1.inOut"

});
gsap.from(".image2",{
    y:50,
    delay:0.7,
    opacity:0,
    duration:1.5,
    ease:"power1.inOut"

});
gsap.from(".image3",{
    y:50,
    opacity:0,
    delay:0.9,
    duration:1.4,
    ease:"power1.inOut"

});
gsap.from(".image4",{
    y:50,
    opacity:0,
    duration:1.2,
    ease:"power1.inOut"
});
gsap.from(".image5",{
    y:50,
    opacity:0,
    duration:1.1,
    ease:"power1.inOut"

});

gsap.from(".image6",{
    y:50,
    opacity:0,
    duration:0.8,
    ease:"power1.inOut"

});

gsap.from(".image8",{
    y:100,
    opacity:0,
    duration:1.2,
    ease:"power1.inOut"

});

gsap.from(".home_content",{

   y:-100,
   opacity:0,
   duration:1.9,
   ease:"power1.inOut"

});


var slide = document.querySelector("#checkbox");
let bars = document.querySelector(".barss")

var slidebar = document.querySelector(".slidebar");

var check = 0;

slide.addEventListener("click", function () {
    if (check == 0) {
   
      slidebar.style.scale = "1";
    
      
      
      check = 1
    } else {
        
        slidebar.style.scale = "0";
       
      check = 0
  }
});
