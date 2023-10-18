"use strict"
$(document).ready( () => {

   
  let imageCache = [];
  $("#slides img").each( (index, img) => {    
      const image = new Image();
      image.src = $(img).attr("src");
      imageCache[index] = image;
     });

  let imageCounter = 0;
  setInterval( () => {
      $("#slide").fadeOut(1500,
          () => {
              imageCounter = (imageCounter + 1) % imageCache.length;
              const nextImage = imageCache[imageCounter];
              $("#slide").attr("src", nextImage.src).fadeIn(1500);       
          }); 
  }, 
  3000); 
  
});