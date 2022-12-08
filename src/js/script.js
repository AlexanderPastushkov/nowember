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
  const message = document.getElementById("formMessage");
  let myObj = {
    [userName.name]: userName.value,
    [email.name]: email.value,
    [message.name]: message.value,
  };
  try {
    let serializeObj = JSON.stringify(myObj);
    console.log(serializeObj);

    let value = JSON.parse(serializeObj);
    console.log(value);
  } catch (err) {
    console.log(err);
  }

  localStorage.setItem(myObj, JSON.stringify(myObj));
  console.log(localStorage.getItem(myObj));
  localStorage.setItem(myObj, JSON.stringify(myObj));
  console.log(localStorage.getItem(myObj));
}

//========================================================================================================================================================

//========================================================================================================================================================
// отправка формы без перезагрузки
//========================================================================================================================================================
const form = document.getElementById("form");
form.addEventListener("submit", formSend);
form.addEventListener("submit", addData);
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

    if (input.classList.contains("_name")) {
      if (input.value == "") {
        alert("Enter your name");
        formAddError(input);
        error++;
      }
    } else if (input.classList.contains("_email")) {
      if (input.value == "" || emailTest(input)) {
        alert("Enter correct email");
        formAddError(input);
        error++;
      }
    }
  }
}

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
function autocomplete() {
  // получили инпут в переменную
  let countryInput = document.getElementById("country-input");
  let ulField = document.getElementById("country-list");
  ulField.addEventListener("click", (e) => {
    if (e.target) {
      countryInput.value = e.target.textContent;
      ulField.classList.toggle("closeList");
      console.log(countryInput.value);
    }
  });
  countryInput.addEventListener("input", (e) => {
    // создаем пустой массив
    let countriesArr = [];
    console.log(countriesArr);

    const requestURL = "https://jsonplaceholder.typicode.com/posts";

    // значение инпута
    let targetValue = e.target.value;
    if (targetValue) {
      ulField.classList.remove("closeList");
      console.log(targetValue);
      function sendRequest(method, url, body = null) {
        return fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            countriesArr = data.filter((item) =>
              item.title

                .toLowerCase()
                .includes(targetValue.trim().toLowerCase())
            );

            // map преобразует массив , получаем новый массив с тегом ли
            countriesArr = countriesArr.map((item) => `<li>${item.title}</li>`);
            console.log(countriesArr);
            showCountry(countriesArr);
          });
      }
      console.log(sendRequest("GET", requestURL));

      function showCountry(countriesArr) {
        // проверяем длину массива, если не пустой то преобразуем его в строку
        const html = !countriesArr.length ? "" : countriesArr.join("");
        // добавляем содержимое в список в html файл
        ulField.innerHTML = html;
        console.log(html);
      }
    }
    console.log(countriesArr);
  });
}
autocomplete();

//========================================================================================================================================================
var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
];
//========================================================================================================================================================

//========================================================================================================================================================
// XMLHttpRequest
//========================================================================================================================================================

// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };
//     xhr.onerror = () => {
//       reject(xhr.response);
//     };
//     xhr.send(JSON.stringify(body));
//   });
// }

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const body = {
//   name: "Alexander",
//   age: 33,
// };

// sendRequest("POST", requestURL, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//========================================================================================================================================================
// fetch
//========================================================================================================================================================

// function sendRequest(method, url, body = null) {
//   return fetch(url).then((response) => {
//     return response.json();
//   });
// }

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const body = {
//   name: "Alexander",
//   age: 33,
// };

// function getAverage(marks){
//   return Math.round(marks.reduce((a,b)=> a+b)/marks.length);

// }
// console.log(getAverage([1,2,3,4]));

// function getCarMap(cars) {
//   let counter = {};
//   for (let elem of cars) {
//     // console.log(counter[elem.id]);
//     if (counter[elem.id] === undefined) {
//       counter[elem.id] = 1;
//     } else {
//       counter[elem.id]++;
//     }
//   }

//   return counter;
// }

// // INPUT:
// const inputCar = [
//   { id: "tesla", name: "Tesla" },
//   { id: "tesla", name: "Tesla" },
//   { id: "tesla", name: "Tesla" },
//   { id: "audi", name: "Audi" },
//   { id: "audi", name: "Audi" },
//   { id: "mercedes", name: "Mercedes-Benz" },
//   { id: "mercedes", name: "Mercedes-Benz" },
//   { id: "mercedes", name: "Mercedes-Benz" },
//   { id: "mercedes", name: "Mercedes-Benz" },
// ];

// console.log(getCarMap(inputCar));

// for (let cars in inputCar) {
//   console.log(inputCar[cars]?.id);
// }
// let resultOne = inputCar.filter(function (item) {
//   return item.name == "Tesla";
// });
// console.log(resultOne);

// for (let cars in inputCar) {
//   output[inputCar[cars]?.id] = console.log(inputCar[cars]?.id);
// }

// output = {
//   [cars]: i,
// };
// console.log(output);

// OUTPUT:

// {
//   'tesla': 3,
//   'audi': 2,
//   'mercedes': 4,
// }
// let myObj = {
//   name: "John",
//   email: "sanekhouse54@gmai.com",
//   country: "USA",
// };
// localStorage.setItem("myObj", myObj);
// console.log(localStorage.getItem("myObj"));

// let serializeObj = JSON.stringify(myObj);
// localStorage.setItem("serializeObj", serializeObj);
// console.log(localStorage.getItem("serializeObj"));
// let value = JSON.parse(serializeObj);
// console.log(value);
//========================================================================================================================================================
// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// let serial = JSON.stringify(user);
// console.log(serial);
// let vaue = JSON.parse(serial);
// console.log(vaue);
//========================================================================================================================================================
// let userInfo = {
//   name: "vasya",
//   age:30,
//   "58":"znzk",
// }
// console.log(userInfo['name']);

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
//  let reduceValue= inputCar.reduce(function(previousValue, item, index, array){
//   console.log(previousValue);
//   return item.name==('Audi');
// });
// console.log(reduceValue);
