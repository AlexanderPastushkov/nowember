


 

const quest = document.querySelectorAll('.content__question');
const answer = document.querySelectorAll('.content__answer');
console.log(answer);
quest.forEach(item=>{
  item.addEventListener("click", function(e){
    answer.forEach(item=> {
      item.classList.toggle('content__answer-active');
    });  
  });
});


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





