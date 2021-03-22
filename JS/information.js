'use strict';

let vaccineName=['Sputnik V ','AstraZeneca','mRNA-1273','BNT162b2'];
let companyName=['Gamaleya Research Institute','Oxford University and AstraZeneca','moderna ',' pfizer and BioNTech'];
let countryofManufact=['Russian','United Kingdom','United States','United States'];
let tempreture=['2-8 C','2-8 C','-20 C','-70 C'];
let effectivenessRate=['92%','70%-90%','95%','95 %'];
let imgpath=['Gam-COVID_Vac','AstraZeneca','moderna','bnt162'];
let price=['10$','3-4$','25-37$','20$'];

function Vaccine (vaccineName,companyName,countryofManufact,tempreture,effectivenessRate,imgPath,price){
  this.vaccineName=vaccineName;
  this.companyName=companyName;
  this.countryofManufact=countryofManufact;
  this.tempreture=tempreture;
  this.dose=2;
  this.effectivenessRate=effectivenessRate;
  this.imgPath=`./img/vaccineImg/${imgPath}.png`;
  this.price=price;
  Vaccine.vaccineData.push(this);
}

Vaccine.vaccineData=[];

for(let i=0;i<vaccineName.length;i++){
  new Vaccine(vaccineName[i],companyName[i],countryofManufact[i],tempreture[i],effectivenessRate[i],imgpath[i],price[i]);
}

localStorage.setItem('vaccine-data',JSON.stringify(Vaccine.vaccineData));

let vaccineImg=document.getElementById('vaccineImg');
let vaccineData=document.getElementById('vaccineData');

function getlocalstorage(){

  let storedImgId=JSON.parse(localStorage.getItem('imgId'));
  for( let i=0;i<vaccineName.length;i++){
    if(storedImgId===i){
      let storedvaccine=JSON.parse(localStorage.getItem('vaccine-data'));
      vaccineImg.src=storedvaccine[i].imgPath;
      let vaccinelist=document.createElement('ul');
      vaccineData.appendChild(vaccinelist);
      vaccinelist.innerHTML = '<li>' + 'Vaccine Name: '+storedvaccine[i].vaccineName + '</li>';
      vaccinelist.innerHTML += '<li>' + 'Company Name: '+storedvaccine[i].companyName+ '</li>';
      vaccinelist.innerHTML += '<li>' + 'Country of Manufacturing: '+ storedvaccine[i].countryofManufact + '</li>';
      vaccinelist.innerHTML += '<li>' + 'Storage Tempreture: '+storedvaccine[i].tempreture + '</li>';
      vaccinelist.innerHTML += '<li>' + 'Dose: '+storedvaccine[i].dose + '</li>';
      vaccinelist.innerHTML += '<li>' + 'Effectiveness Rate: '+storedvaccine[i].effectivenessRate+ '</li>';
      vaccinelist.innerHTML += '<li>' +'Price:'+storedvaccine[i].price + '</li>';
    }
  }
}
getlocalstorage();

