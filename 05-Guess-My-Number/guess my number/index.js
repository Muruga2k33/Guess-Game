// var secret_number = Math.floor(Math.random() * 20);
// var score = 20;
// var check = document
//   .querySelector("#btn2")
//   .addEventListener("click", function () {
//     var input = Number(document.querySelector("#inpt").value);
//     if (!input) {
//       document.querySelector(".txt").textContent = "😁 No Number!";
//     } else if (input > secret_number) {
//       document.querySelector(".txt").textContent = "😁 Number Is Too High!";
//       if (score > 1) {
//         score--;
//         document.querySelector(".score").textContent = score;
//       } else {
//         document.querySelector(".txt").textContent = "😁 You Lost Game!";
//       }
//     } else if (input < secret_number) {
//       document.querySelector(".txt").textContent = "😁 Number Is Too Low!";
//       if (score > 1) {
//         score--;
//         document.querySelector(".score").textContent = score;
//       } else {
//         document.querySelector(".txt").textContent = "😁 You Lost Game!";
//       }
//     } else if (input === secret_number) {
//       document.querySelector(".txt").textContent = "😁 Correct Number :)";
//       document.body.style.backgroundColor = "green";
//       document.querySelector("#q").textContent = secret_number;
//     }
//   });


// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   location.reload();
// });



// var secret_number = Math.floor(Math.random()*20+1);
//   console.log(secret_number)
// var score = 20;
// document.querySelector(".btn2").addEventListener("click",function(){
// var input =Number(document.querySelector(".inpt").value);
// if (!input) {
//   document.querySelector(".txt").textContent = "ℹ️ NO NUMBER";
// }
// else if(input===secret_number){
//   document.querySelector(".txt").textContent = "😃 Correct number";
//   document.querySelector("#q").textContent=secret_number;
//   document.body.style.backgroundColor = "green";
// }
// else if(input>secret_number){
//   if (score>1) {
//     document.querySelector(".txt").textContent = "😆 Number is too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   }
// }
// else if(input<secret_number){
//   if (score>1) {
//     document.querySelector(".txt").textContent = "😆 Number is too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   }
  
// }
// });