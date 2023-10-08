"use strict"


const $ = selector => document.querySelector(selector);
 $(document).ready(function(){
  $("#datepicker").datepicker();
 });
const processEntries = () =>{
  const email = $("#email_1");
  const phone = $("#phone");
  const state = $("#state");
  const terms = $("#terms");

  let isValid = true;

  if (email.value == ""){
    email.nextElementSibling.textContent = "Enter an email.";
    isValid = false;
  }else{
    email.nextElementSibling.textContent = "";
  }
  if (phone.value == ""){
    phone.nextElementSibling.textContent = "Enter a phone number.";
    isValid = false;
  }else{
    phone.nextElementSibling.textContent = "";
  }
  if (state.value == ""){
    state.nextElementSibling.textContent = "Select a state."
    isValid = false;
  }else{
    state.nextElementSibling.textContent = "";
  }
  if (terms.checked == false){
    terms.nextElementSibling.textContent = "You have to agree to terms of service.";
    isValid = false;
  }else{
    terms.nextElementSibling.textContent = "";
  }
  if(isValid == true){
    $("form").submit();
  }
};
const resetForm = () => {
  $("form").reset();
  $("#email_1").nextElementSibling.textContent = "*";
  $("#phone").nextElementSibling.textContent = "*";
  $("#state").nextElementSibling.textContent = "*";
  $("#terms").nextElementSibling.textContent = "*";
  $("#email_1").focus();
};
document.addEventListener("DOMContentLoaded", () => {
  $("#register").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);
  $("#email_1").focus();
});

