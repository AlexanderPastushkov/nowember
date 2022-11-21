document.addEventListener("click", documentActions);
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.classList.contains("content__question")) {
    targetElement
      .closest(".block1-help__content")
      .classList.toggle("content__answer-active");
  }
}
//========================================================================================================================================================

function addData() {
  const email = document.getElementById("formEmail");
  const userName = document.getElementById("formName");
  localStorage.setItem(userName.name, userName.value);
  localStorage.setItem(email.name, email.value);
}
//========================================================================================================================================================
// отправка формы без перезагрузки
//========================================================================================================================================================
const form = document.getElementById("form");
form.addEventListener("submit", formSend);
form.addEventListener("submit",addData);
 function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");
  console.log(formReq);


  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    console.log(input);

    formRemoveError(input);
  
    if (input.classList.contains("_name")){
      if (input.value == "") {
      
        
          alert('Enter your name');
          formAddError(input);
          error++;
        }
      } 
    else 
    if (input.classList.contains("_email")){
    if ((input.value == "")||(emailTest(input))) {
    
      
        alert('Enter correct email');
        formAddError(input);
        error++;
      }
    } 

    // if (input.value == "") {
    //   formAddError(input);
      
    //   error++;
    // }
  //  else 
  //   if (input.classList.contains("_email")) {
  //     if (emailTest(input)) {
  //       alert('write correct email');
  //       formAddError(input);
  //       error++;
  //     }
  //   } 
}}

function formAddError(input) {
  input.classList.add("_error");
}
function formRemoveError(input) {
  input.classList.remove("_error");
}
function emailTest(input) {
  
  
  return !/^\S+@\S+\.\S+$/.test(input.value);
}
//========================================================================================================================================================

// function validateForm() {
//   let x = document.forms["myForm"]["name"].value;
//   let y = document.forms["myForm"]["email"].value;

//   if ((x =="")||(y=="")){
//     alert ("fill in all fields with *");
//     form.classList.add('invalid');
//     return false;
//   }

// }

// function validateForm() {
//   let form = document.getElementById('form');
//   let x = document.forms["myForm"]["name"].value;
//   let y = document.forms["myForm"]["email"].value;
//   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if ((x =="")||(y=="")){
//     alert ("fill in all fields with *");

//     // return false;
//   }
//    if(y.match(pattern)) {
//     y.classList.toggle(valid);

//   }
//   else{
//     y.classList.toggle('invalid');
//     x.classList.add('invalid');
//   }

// }
// function validate(){
//   var form = document.getElementById("form");
//   var email = document.getElementById("email").value;
//   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

// }

// function validate(){

//   if(email.match(pattern))
//   {
//       form.classList.add("valid");
//       form.classList.remove("invalid");
//   }
//   else{
//       form.classList.remove("valid");
//       form.classList.add("invalid");
//   }
//   if (email == "") {
//       form.classList.remove("valid");
//       form.classList.remove("invalid");
//   }
// }

// function checkData(){
//   const email = document.getElementById('formEmail').value;
//   const userName = document.getElementById('formName').value;

//    const getName = localStorage.getItem(userName.value);
//    const getEmail = localStorage.getItem(email.value);

//    if(email==getEmail){
//     if (userName== getName){
//       alert("Login Successful!!!");
//     }
//     else{
//       alert("Error name");
//     }

//    }
//    else {
//     alert("Total Error");
//    }
// }

//========================================================================================================================================================

// const formFields = document.querySelectorAll('[type="text"]');
// const submitBtn = document.querySelector('[type="submit"]')
// console.log(formFields);
// console.log(submitBtn);

// submitBtn.addEventListener('click',clearLocalStorage);

// function clearLocalStorage() {
//   localStorage.clear();
// }
//========================================================================================================================================================
// function changeHandler(){
//   console.log(this.name, this.value);
//   localStorage.setItem(this.name, this.value);
//   }
//========================================================================================================================================================
// function checkStorage() {
//   for (let i = 0; i < formFields.length; i++) {
//     formFields[i] = localStorage.getItem(formFields[i].name)
//     console.log(formFields[i].name);
//   }
//   attachEvents();

// }
// function attachEvents(){
//   for (let i = 0; i < formFields.length; i++) {
//     formFields[i].addEventListener('change',changeHandler);
//   }
// }
// checkStorage();
// console.log(checkStorage());
//========================================================================================================================================================
