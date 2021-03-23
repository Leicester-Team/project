'use strict';


let img1 = document.getElementById('0');
console.log(img1);

img1.addEventListener('click' , clickimag1);

function clickimag1 (){
  let imgId = 0;
  localStorage.setItem('imgId' , imgId);
  window.location.href = './information.html';
  img1.removeEventListener('click' , clickimag1);

}

let img2 = document.getElementById('1');
console.log(img2);

img2.addEventListener('click' , clickimag2);

function clickimag2 (){
  let imgId =1;
  localStorage.setItem('imgId' , imgId);
  window.location.href = './information.html';
  img2.removeEventListener('click' , clickimag2);

}
let img3 = document.getElementById('2');
console.log(img3);

img3.addEventListener('click' , clickimag3);

function clickimag3 (){
  let imgId = 2;
  localStorage.setItem('imgId' , imgId);
  window.location.href = './information.html';
  img3.removeEventListener('click' , clickimag3);

}
let img4 = document.getElementById('3');
console.log(img4);

img4.addEventListener('click' , clickimag4);

function clickimag4 (){
  let imgId = 3;
  localStorage.setItem('imgId' , imgId);
  window.location.href = './information.html';
  img4.removeEventListener('click' , clickimag4);

}

let home= document.getElementById('home');
home.addEventListener('click',clickHome);
function clickHome(){
  window.location.href = './index.html';
}

let reg= document.getElementById('reg');
reg.addEventListener('click',clickReg);
function clickReg(){
  window.location.href = './registration.html';
}

let track= document.getElementById('track');
track.addEventListener('click',clickTrack);
function clickTrack(){
  window.location.href = './track.html';
}

let about= document.getElementById('about');
about.addEventListener('click',clickAbout);
function clickAbout(){
  window.location.href = './aboutus.html';
}
