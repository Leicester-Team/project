'use strict';

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
