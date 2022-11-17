
document.addEventListener('click',documentActions);
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.classList.contains('content__question')){
    targetElement.closest('.block1-help__content').classList.toggle('content__answer-active');
  }
  
}
//========================================================================================================================================================
// function addData(){
//   const email = document.getElementById('formEmail');
//   const userName = document.getElementById('formName');
//   localStorage.setItem(userName.name,userName.value);
//   localStorage.setItem(email.name,email.value);


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

const formFields = document.querySelectorAll('[type="text"]');
const submitBtn = document.querySelector('[type="submit"]')
console.log(formFields);
console.log(submitBtn);
 
submitBtn.addEventListener('click',clearLocalStorage);

function clearLocalStorage() {
  localStorage.clear();
}
//========================================================================================================================================================
function changeHandler(){
  console.log(this.name, this.value);
  localStorage.setItem(this.name, this.value);
  }
//========================================================================================================================================================
function checkStorage() {
  for (let i = 0; i < formFields.length; i++) {
    formFields[i] = localStorage.getItem(formFields[i].name)
    console.log(formFields[i].name);
  }
  attachEvents();
  
}
function attachEvents(){
  for (let i = 0; i < formFields.length; i++) {
    formFields[i].addEventListener('change',changeHandler);
  }
}
checkStorage();
console.log(checkStorage());
//========================================================================================================================================================

function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  let y = document.forms["myForm"]["email"].value;
  
  if ((x =="")||(y=="")){
    alert ("fill in all fields with *");
    return false;
  }
  
}



