'use strict';
let users = JSON.parse(localStorage.getItem('users'));

let allergyV = '';

function random_ID (){
  let num  = Math.floor(Math.random() * (9999999 - 1000000 +1)+1000000);
  return num;
}

function id_num () {
  let num = random_ID();
  if(localStorage.getItem('users') === null){
    return num;
  }else{
    for (let i = 0;i <users.length;i++){
      if (num === users[i].id){
        num =random_ID();
        i = 0;
      }else{
        return num;
      }
    }
  }

}


let dateInput = '';
document.getElementById('date').addEventListener('change', function() {
  dateInput = this.value;

});

let formregest = document.getElementById('form');

function Data(name, age, phoneNumber, vaccineType, allergy){
  this.id = id_num();
  this.name = name;
  this.age = age;
  this.phoneNum = phoneNumber;
  this.date = dateInput;
  this.vaccineType = vaccineType;
  this.allergy = allergy;
}

let arr = [];
let amountVaccines = [20,20,20,20];
if(localStorage.getItem('amountVaccines') === null){
  localStorage.setItem('amountVaccines' , JSON.stringify(amountVaccines));
}else{
  amountVaccines = JSON.parse(localStorage.getItem('amountVaccines'));
}

formregest.addEventListener('submit' , submitholder);

function submitholder (event){
  event.preventDefault();
  let nameInput = document.getElementById('name').value;
  let ageInput = document.getElementById('age').value;
  let phoneNumInput = document.getElementById('phonenum').value;
  let vaccinesT = document.getElementById('vaccines').value;

  if (vaccinesT === 'Sputnik V'){
    amountVaccines[0]--;
  }else if (vaccinesT === 'AstraZeneca'){
    amountVaccines[1]--;
  }else if (vaccinesT === 'mRNA-1273'){
    amountVaccines[2]--;
  }else{
    amountVaccines[3]--;
  }
  if (document.getElementById('yes').checked){
    allergyV = 'yes';
  }else{
    allergyV = 'no';
  }

  localStorage.setItem('amountVaccines' , JSON.stringify(amountVaccines));

  let userData = new Data(nameInput,ageInput,phoneNumInput,vaccinesT,allergyV);
  arr.push(userData);


  if(localStorage.getItem('users') === null){
    localStorage.setItem('users' , JSON.stringify(arr));
  }else{
    arr = JSON.parse(localStorage.getItem('users'));
    arr.push(userData);
    localStorage.setItem('users' , JSON.stringify(arr));
  }

  formregest.innerHTML = '';

  let h3 = document.createElement('h3');
  h3.innerText = 'Thank you '+ arr[arr.length-1].name +' for your registration..';
  formregest.appendChild(h3);
  let ul = document.createElement('ul');
  let idli = document.createElement('li');
  idli.innerText = 'Your ID: ' + arr[arr.length-1].id;
  ul.appendChild(idli);
  let ageli = document.createElement('li');
  ageli.innerText = 'Your Age: ' + arr[arr.length-1].age;
  ul.appendChild(ageli);
  let phoneli = document.createElement('li');
  phoneli.innerText = 'Your Phone Number: ' + arr[arr.length-1].phoneNum;
  ul.appendChild(phoneli);
  let vaccineli = document.createElement('li');
  vaccineli.innerText = 'Your Vaccine Type: ' + arr[arr.length-1].vaccineType;
  ul.appendChild(vaccineli);
  let allergyli = document.createElement('li');
  allergyli.innerText = 'Allergy: ' + arr[arr.length-1].allergy;
  ul.appendChild(allergyli);
  let dateLi =document.createElement('li');
  dateLi.innerText= 'Your Vaccine Appointment Date: '+ arr[arr.length-1].date;
  ul.appendChild(dateLi);

  formregest.appendChild(ul);
}