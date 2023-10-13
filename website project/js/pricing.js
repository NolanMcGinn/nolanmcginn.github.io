"use strict";
$(document).ready(function() {
  $('.burning').burn();
});

let again = "y";
do {
  let width = 0;
  do{
   width = parseFloat(prompt("Enter width of yard as feet"));
  }
  while (isNaN(width) || width <= 0);

  let length = 0;
  do{
   length = parseFloat(prompt("Enter length of the yard as feet"));
  }
  while (isNaN(length) || length <= 0);

  let depth = 0;
  do{
   depth = parseFloat(prompt("How deep would you like it as feet"));
  }
  while (isNaN(depth) || depth <= 0);
  let sharks = 0;
  do{
    sharks = parseInt(prompt("How many sharks would you like"));
  }
  while (isNaN(sharks) || sharks<0);
  
  document.write(`<h4>Width: ${width}ft Length: ${length}ft Depth: ${depth}ft</h4>`);
  const total = (width+length+depth);
  document.write(`<h4>Total: ${total}ft</h4>`);
  again = prompt("Did you enter all the numbers? (y/n)", "y");
  const price = parseInt(total/10 * 100);
  document.write(`<h4>Price without sharks: ${price}$<h4>`);
  document.write(`<h4>Amount of sharks: ${sharks}<h4>`);
  const shark_total = parseFloat(sharks * 7000);
  document.write(`<h4>Price of sharks: ${shark_total}$`);
  const grand_total = parseInt(shark_total + price);
  document.write(`<h4>Grand total: ${grand_total}$`);
}
while (again == "n");

