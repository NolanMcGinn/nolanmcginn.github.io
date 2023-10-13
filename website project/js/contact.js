"use strict"

const $ = selector => document.querySelector(selector);

const processEntries = () =>{
  const email = $("#email_1");
  const phone = $("#phone");
  const state = $("#state");
  const terms = $("#terms");
  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

  let isValid = true;

  if (email.value == "" || emailPattern.test(email)){
    email.nextElementSibling.textContent = "Enter an email.";
    isValid = false;
  }else{
    email.nextElementSibling.textContent = "";
  }
  if (phone.value == "" || phonePattern.test(phone)){
    phone.nextElementSibling.textContent = "Enter a phone number in 000-000-0000 format.";
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


