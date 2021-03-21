'use strict';
let vaccineName=['Sputnik V ','AstraZeneca','mRNA-1273','BNT162b2'];
let companyName=['Gamaleya Research Institute','Oxford University and AstraZeneca','moderna ',' pfizer and BioNTech'];
let countryofManufact=['Russian',]
function Vaccine (vaccineName,companyName,countryofManufact,tempreture,dose, effectivenessRate,imgPath,price){
  this.vaccineName=vaccineName;
  this.companyName=companyName;
  this.countryofManufact=countryofManufact;
  this.tempreture=tempreture;
  this.dose=dose;
  this.effectivenessRate=effectivenessRate;
  this.imgPath=imgPath;
  this.price=price;
  Vaccine.vaccineData.push(this);
}

Vaccine.vaccineData=[];

for(let i=0;i<vaccineName.length;i++){
new  Vaccine()
}

