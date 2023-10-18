"use strict"
const $ = selector => document.querySelector(selector);
const processEntries= ()=>{
  const email1 = $("#email")
  const phone1 = $("#phone")
  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  
  let isValid = true;
  
  if(email1.value== "" || emailPattern.test(email1)){
    email1.nextElementSibling.textContent = "Enter an email";
    isValid=false;
  }else{
    email1.nextElementSibling.textContent = "";
  }
  if(phone1.value== "" || phonePattern.test(phone1)){
    phone1.nextElementSibling.textContent = "Enter a phone number in 333-2222-5555 format";
    isValid=false;
  }else{
    phone1.nextElementSibling.textContent = "";
  }
  if(isValid == true){
    $("form").submit();
  }
}
const resetForm = () => {
  $("form").reset();
  $("#email").nextElementSibling.textContent = "*";
  $("#phone").nextElementSibling.textContent = "*";

  $("#email").focus();
};
document.addEventListener("DOMContentLoaded", () => {
  $("#register").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);
  $("#email_1").focus();
});