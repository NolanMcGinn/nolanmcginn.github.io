"use strict";
$(document).ready( () => {

   
    let imageCache = [];
    $("#slides img").each( (index, img) => {    
        const image = new Image();
        image.src = $(img).attr("src");
        image.title = $(img).attr("alt");
        imageCache[index] = image;
       });

    let imageCounter = 0;
    setInterval( () => {
        $("#caption").fadeOut(1500);
        $("#slide").fadeOut(1500,
            () => {
                imageCounter = (imageCounter + 1) % imageCache.length;
                const nextImage = imageCache[imageCounter];
                $("#slide").attr("src", nextImage.src).fadeIn(1500);
                $("#caption").text(nextImage.title).fadeIn(1500);        
            }); 
    }, 
    3000); 
    
});