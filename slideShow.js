document.getElementById("prev").addEventListener("click", function(){
    plusSlides(-1);
 });
 
 document.getElementById("next").addEventListener("click", function(){
    plusSlides(1);
 });
 
 document.getElementById("startStop").addEventListener("click", function(){
   startStopButton();
 });
 
 let timer;
 let slideIndex = 0;
 let isPlaying = false;
 
 function showSlide(){
   let slides = document.querySelectorAll(".slide");
   if(slideIndex >= slides.length){
     slideIndex = 0;
   }
   if(slideIndex < 0){
     slideIndex = slides.length - 1;
   }
   for(let i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
   }
   slides[slideIndex].style.display = "block";
 } 
 
 function plusSlides(n){
   clearInterval(timer);
   isPlaying = false;
   slideIndex += n;
   showSlide();
 }
 
 function startStopButton(){
   let startStopButton = document.getElementById("startStop");
   if(!isPlaying){
     timer = setInterval(function(){
       slideIndex++;
       showSlide();
     }, 2000);
     isPlaying = true;
   } else {
     clearInterval(timer);
     isPlaying = false;
   }
 }
 
 showSlide();
 