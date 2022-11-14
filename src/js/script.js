
const blockContent = document.querySelector('.block1-help__content');
console.log(blockContent);

document.addEventListener("click",answer);

function answer(e) {
  if(e.target.closest('.content__question')){
    console.log(e.target);
  
    blockContent.classList.toggle('content__answer-active');
  }
  if(!e.target.closest('.block1-help__content')){
    blockContent.classList.remove('content__answer-active');
  }}

// const quest = document.querySelectorAll('.content__question');
// const answer = document.querySelectorAll('.content__answer');
// console.log(answer);
// quest.forEach(item=>{
//   item.addEventListener("click", function(e){
//     item.querySelector('.content__answer');
//       item.classList.toggle('content__answer-active');
//     });  
//   });




























 // Создаю открывающееся/закрывающееся меню (закрываться будет и при нажатии на Escape)
// const menuBody = document.querySelector('.menu')
// function menu(e) {
// 	if (e.target.closest('.menu__button')) {
// 		menuBody.classList.toggle('_active')
// 	}
// 	if (!e.target.closest('.menu')) {
// 		menuBody.classList.remove('_active')
// 	}
// }
// document.addEventListener('click', menu)
// document.addEventListener('keyup', function (e) {
// 	if (e.code === 'Escape') {
// 		menuBody.classList.remove('_active')
// 	}
// })

// const quest = document.querySelectorAll('.content__question');
// const answer = document.querySelectorAll('.content__answer');
// console.log(answer);
// quest.forEach(item=>{
//   item.addEventListener("click", function(e){
//     item.querySelector('.content__answer')
//       item.classList.toggle('content__answer-active');
//     });  
//   });









// item.querySelector('.content__answer');


// const block = document.querySelectorAll('.block1-help__content');
// console.log(block);
// quest.forEach(item=>{
// item.addEventListener("click",function returnAnswer (event){
//   console.log(event.target);
// });







// const quest = document.querySelectorAll('.content__question');
// const answer = document.querySelectorAll('.content__answer');
// console.log(answer);
// quest.forEach(item=>{
//   item.addEventListener("click", function(e){
//     answer.forEach(function(item) {

//       item.classList.toggle('content__answer-active');
//     });  
//   });
// });


