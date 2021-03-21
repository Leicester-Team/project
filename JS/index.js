'use strict';

let div = document.getElementById("imagesDiv");
console.log(div);

div.addEventListener("click" , clickhandler);

function clickhandler (event){
  let imgId;
  for(let i = 1;i <= 4;i++){
    if (i === parseInt(event.target.title)){
      imgId = i;
    }
  }
  localStorage.setItem('imgId' , imgId);
  window.location.href = "./information.html";
  div.removeEventListener('click' , clickhandler);
}
