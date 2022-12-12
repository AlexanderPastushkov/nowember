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
  let countryInput = document.getElementById("country-input");
  let ulField = document.getElementById("country-list");

  ulField.addEventListener("click", (e) => {
    if (e.target) {
      countryInput.value = e.target.textContent;
      ulField.classList.add("closeList");
      console.log(countryInput.value);
    }
  });
  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        // fn.apply
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };
  // document.addEventListener("click", (e) => {
  //   ulField.classList.add("closeList");
  // });
  countryInput.addEventListener("input", debounce(onChange, 500));
  function onChange(e) {
    let countriesArr = [];

    const requestURL = "https://jsonplaceholder.typicode.com/posts";

    if (e.target.value) {
      console.log(e.target.value);

      function sendRequest(method, url, body = null) {
        return fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            countriesArr = data.filter((item) =>
              item.title
                .trim()
                .toLowerCase()
                .includes(e.target.value.trim().toLowerCase())
            );

            // map преобразует массив , получаем новый массив с тегом ли
            countriesArr = countriesArr.map((item) => `<li>${item.title}</li>`);

            showCountry(countriesArr);
          });
      }
      sendRequest("GET", requestURL);
      ulField.classList.remove("closeList");
    } else {
      ulField.classList.add("closeList");
    }
  }

  function showCountry(countriesArr) {
    // проверяем длину массива, если не пустой то преобразуем его в строку
    const html = !countriesArr.length ? "" : countriesArr.join("");
    // добавляем содержимое в список в html файл
    ulField.innerHTML = html;
  }
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
// function hasSurvived(attackers, defenders) {
//   let att = 0;
//   let def = 0;
//   for (let i = 0; i < attackers.length || i < defenders.length; i++)
//     if (attackers[i] > defenders[i] || defenders[i] == undefined) {
//       att++;
//     } else if (attackers[i] < defenders[i] || attackers[i] == undefined) {
//       def++;
//     }

//   console.log(att);
//   console.log(def);
//   if (att == def) {
//     let sumAtt = attackers.reduce((a, c) => a + c, 0);
//     let sumDef = defenders.reduce((a, c) => a + c, 0);
//   }
//   if (sumDef > sumAtt) {
//     return false;
//   } else {
//     return true;
//   }
// }
// hasSurvived([1, 2, 3], [2, 3, 4]);
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
//========================================================================================================================================================
