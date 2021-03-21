
let vaccineName=['Sputnik V ','AstraZeneca','mRNA-1273','BNT162b2'];
let companyName=['Gamaleya Research Institute','Oxford University and AstraZeneca','moderna ',' pfizer and BioNTech'];
let countryofManufact=['Russian','UK','US',' Germany'];
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

console.table(Vaccine.vaccineData);

localStorage.setItem('vaccine-data',JSON.stringify(Vaccine.vaccineData));