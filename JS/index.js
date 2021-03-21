'use strict';


let vaccineImges = document.getElementById('vaccineImges');
console.log(vaccineImges);

vaccineImges.addEventListener('click' , clickhandler);

function clickhandler (event){
  let imgId;
  for(let i = 0;i<4;i++){
    if (i === parseInt(event.target.id)){
      imgId =i;
      console.log(imgId);
    }
  }
  localStorage.setItem('imgId' , imgId);
  window.location.href = './information.html';
  vaccineImges.removeEventListener('click' , clickhandler);

}
