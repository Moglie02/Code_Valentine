$(document).ready(function(){
//     const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// const loveMessage1 = prompt("Enter a love message:");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.font = "50px Arial";
// ctx.textAlign = "center";
// ctx.fillStyle = "red";

// let x = canvas.width / 2;
// let y = canvas.height / 2;
// let angle = 0;

// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   x = x + Math.cos(angle) * 10;
//   y = y + Math.sin(angle) * 10;
//   angle += 0.1;
//   ctx.fillText(loveMessage1, x, y);
// }

// animate();

// let heart = [];

// class Heart {
//   constructor(x, y, size) {
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.vx = 5 * Math.random() - 2.5;
//     this.vy = 5 * Math.random() - 2.5;
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.vy += 0.1;

//     if (this.x > canvas.width || this.x < 0) {
//       this.vx = -this.vx;
//     }
//     if (this.y > canvas.height || this.y < 0) {
//       this.vy = -this.vy;
//     }

//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//     ctx.fillStyle = "red";
//     ctx.fill();
//   }
// }

// function createHearts() {
//   for (let i = 0; i < 50; i++) {
//     heart.push(new Heart(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 20 + 10));
//   }
// }

// createHearts();

// function updateHearts() {
//   for (let i = 0; i < heart.length; i++) {
//     heart[i].update();
//   }
// }

// setInterval(updateHearts, 50);

// animation 2

const loveMessage = document.getElementById("message");
const loveLetters = ["I", " ",  "L", "o", "v", "e", " ", "y", "o", "u", "!"];
let i = 0;

const animateLoveMessage = () => {
  if (i < loveLetters.length) {
    loveMessage.innerHTML += loveLetters[i];
    i++;
  } else {
    i = 0;
    loveMessage.innerHTML = "";
  }
};

setInterval(animateLoveMessage, 600);






  });

