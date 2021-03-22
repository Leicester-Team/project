'use strict';
let theadItems=['Delete Order','ID','Name','Age','Phone Number','Vaccines Type','Allergy','Vaccine Appointment Date'];


let data = JSON.parse(localStorage.getItem('users'));
let amount = JSON.parse(localStorage.getItem('amountVaccines'));
let form = document.getElementById('form');
let main = document.getElementById('main');
form.addEventListener('submit',submitHolder);

function submitHolder(event){
  event.preventDefault();
  let userSelected = event.target.user_type_list.value;
  let Oredernumber = event.target.id.value;

  if(parseInt(userSelected)===0){
    alert('Please select type of user');
  }else if(parseInt(userSelected)===1){
    if(parseInt(Oredernumber)===999){
      orderTable();
      alert('Welcome To Admin Page');

    }else if(!Oredernumber){
      alert('Please put the user id');
    }else{
      alert('Wrong id number');
    }
  }else{
    if(!Oredernumber){
      alert('Please put the user id');
    }else{
      for(let i=0;i<data.length;i++){
        if(parseInt(Oredernumber)===data[i].id){
          alert('Welcome '+ data[i].name);
          userpage(i);
          break;
        }else if(i===data.length-1 && parseInt(Oredernumber)!==data[i].id){
          alert('Wrong id number');
        }

      }
    }
  }

}

function chartFunction() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Sputnik V', 'AstraZeneca', 'mRNA-1273', 'BNT162b2'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: amount
      }]
    },

    // Configuration options go here
    options: {
      scales:{
        yAxes: [{
          ticks: {
            max:20,
            min:0,
            stepSize: 1,
          }
        }]
      }
    }
  });
}

function userpage(i){
  main.innerHTML='';
  let ul=document.createElement('ul');
  let h2=document.createElement('h2');
  h2.innerText='User Page';
  main.appendChild(h2);
  main.appendChild(ul);

  let nameli=document.createElement('li');
  nameli.innerText='Your Name: '+data[i].name;
  ul.appendChild(nameli);

  let ageli=document.createElement('li');
  ageli.innerText='Your Age: '+data[i].age;
  ul.appendChild(ageli);

  let phoneli=document.createElement('li');
  phoneli.innerText='Your Phone Number: '+data[i].phoneNum;
  ul.appendChild(phoneli);

  let vacli=document.createElement('li');
  vacli.innerText='Your Vaccine Type: '+data[i].vaccineType;
  ul.appendChild(vacli);

  let allegli=document.createElement('li');
  allegli.innerText='Your allergy : '+data[i].allergy;
  ul.appendChild(allegli);

  let dateli=document.createElement('li');
  dateli.innerText='Your Vaccine Appointment Date : '+data[i].date;
  ul.appendChild(dateli);

  let button =document.createElement('button');
  button.innerText='Cancel Order';
  button.addEventListener('click',cancelOrder);
  button.setAttribute('id' , i);
  main.appendChild(button);


  if(data[i].vaccineType ==='Sputnik V' || data[i].vaccineType ==='AstraZeneca'){
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src' , 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.8572308373928!2d35.939141915103086!3d31.937633281233566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fa0854d6c79%3A0x1155573c248890f0!2sAlBashir%20Hospital!5e0!3m2!1sen!2sjo!4v1616353794693!5m2!1sen!2sjo');
    iframe.setAttribute('width' , '600');
    iframe.setAttribute('height' , '450');
    iframe.setAttribute('style' , 'border:0');
    iframe.setAttribute('allowfullscreen' , '');
    iframe.setAttribute('loading' , 'lazy');
    main.appendChild(iframe);
  }
  else {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src' , 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.3027549553217!2d35.87240901510488!3d32.00691173121129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9f85fac773a3%3A0x6cd6460a4547306f!2sJordan%20University%20Hospital!5e0!3m2!1sen!2sjo!4v1616354487981!5m2!1sen!2sjo');
    iframe.setAttribute('width' , '600');
    iframe.setAttribute('height' , '450');
    iframe.setAttribute('style' , 'border:0');
    iframe.setAttribute('allowfullscreen' , '');
    iframe.setAttribute('loading' , 'lazy');
    main.appendChild(iframe);
  }
}

function removeOrder(event){
  let deleteOrderNumber=parseInt(event.target.id);

  if(data[deleteOrderNumber].vaccineType==='Sputnik V'){
    amount[0]++;
  }else if(data[deleteOrderNumber].vaccineType==='AstraZeneca'){
    amount[1]++;
  }else if(data[deleteOrderNumber].vaccineType==='mRNA-1273'){
    amount[2]++;
  }else if(data[deleteOrderNumber].vaccineType==='BNT162b2'){
    amount[3]++;
  }
  data.splice(deleteOrderNumber, 1);
  if (data.length === 0){
    localStorage.removeItem('users');
    localStorage.setItem('amountVaccines' , JSON.stringify(amount));
  }else{
    localStorage.setItem('users' , JSON.stringify(data));
    localStorage.setItem('amountVaccines' , JSON.stringify(amount));
  }

  main.innerHTML='';
  orderTable();
}

function orderTable(){


  main.innerHTML='';
  let section = document.createElement('section');
  main.appendChild(section);
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  section.appendChild(table);
  table.appendChild(thead);
  for(let i=0;i<theadItems.length;i++){
    let th = document.createElement('th');
    th.innerText=theadItems[i];
    thead.appendChild(th);
  }

  if(localStorage.getItem('users') !== null){
    for(let i = 0;i < data.length;i++){
      let tr = document.createElement('tr');
      let deleteTD = document.createElement('td');
      deleteTD.innerText = 'X';
      deleteTD.setAttribute('id' , i);
      deleteTD.addEventListener('click', removeOrder);
      tr.appendChild(deleteTD);
      let idTD = document.createElement('td');
      idTD.innerText = data[i].id;
      tr.appendChild(idTD);
      let nameTD = document.createElement('td');
      nameTD.innerText = data[i].name;
      tr.appendChild(nameTD);
      let ageTD = document.createElement('td');
      ageTD.innerText = data[i].age;
      tr.appendChild(ageTD);
      let phoneTD = document.createElement('td');
      phoneTD.innerText = data[i].phoneNum;
      tr.appendChild(phoneTD);
      let vacTD = document.createElement('td');
      vacTD.innerText = data[i].vaccineType;
      tr.appendChild(vacTD);
      let allgTD = document.createElement('td');
      allgTD.innerText = data[i].allergy;
      tr.appendChild(allgTD);
      let dateTD = document.createElement('td');
      dateTD.innerText = data[i].date;
      tr.appendChild(dateTD);
      table.appendChild(tr);
    }
  }
  let canvas = document.createElement('canvas');
  canvas.setAttribute('id' , 'myChart');
  main.appendChild(canvas);
  chartFunction();

}

function cancelOrder(event){
  let cancelOrderNumber=event.target.id;
  if(data[cancelOrderNumber].vaccineType==='Sputnik V'){
    amount[0]++;
  }else if(data[cancelOrderNumber].vaccineType==='AstraZeneca'){
    amount[1]++;
  }else if(data[cancelOrderNumber].vaccineType==='mRNA-1273'){
    amount[2]++;
  }else if(data[cancelOrderNumber].vaccineType==='BNT162b2'){
    amount[3]++;
  }

  data.splice(cancelOrderNumber, 1);
  if (data.length === 0){
    localStorage.removeItem('users');
    localStorage.setItem('amountVaccines' , JSON.stringify(amount));
  }else{
    localStorage.setItem('users' , JSON.stringify(data));
    localStorage.setItem('amountVaccines' , JSON.stringify(amount));
  }

  main.innerHTML='';
  let h1 = document.createElement('h1');
  h1.innerText='Your order has been canceled';
  main.appendChild(h1);

}
