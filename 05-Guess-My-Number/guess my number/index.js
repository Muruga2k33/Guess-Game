// var secret_number = Math.floor(Math.random() * 20);
// var score = 20;
// var check = document
//   .querySelector("#btn2")
//   .addEventListener("click", function () {
//     var input = Number(document.querySelector("#inpt").value);
//     if (!input) {
//       document.querySelector(".txt").textContent = "đ No Number!";
//     } else if (input > secret_number) {
//       document.querySelector(".txt").textContent = "đ Number Is Too High!";
//       if (score > 1) {
//         score--;
//         document.querySelector(".score").textContent = score;
//       } else {
//         document.querySelector(".txt").textContent = "đ You Lost Game!";
//       }
//     } else if (input < secret_number) {
//       document.querySelector(".txt").textContent = "đ Number Is Too Low!";
//       if (score > 1) {
//         score--;
//         document.querySelector(".score").textContent = score;
//       } else {
//         document.querySelector(".txt").textContent = "đ You Lost Game!";
//       }
//     } else if (input === secret_number) {
//       document.querySelector(".txt").textContent = "đ Correct Number :)";
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
//   document.querySelector(".txt").textContent = "âšī¸ NO NUMBER";
// }
// else if(input===secret_number){
//   document.querySelector(".txt").textContent = "đ Correct number";
//   document.querySelector("#q").textContent=secret_number;
//   document.body.style.backgroundColor = "green";
// }
// else if(input>secret_number){
//   if (score>1) {
//     document.querySelector(".txt").textContent = "đ Number is too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   }
// }
// else if(input<secret_number){
//   if (score>1) {
//     document.querySelector(".txt").textContent = "đ Number is too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   }
  
// }
// });