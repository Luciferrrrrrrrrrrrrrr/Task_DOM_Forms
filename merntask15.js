let main = document.createElement("main");
document.body.appendChild(main);
main.setAttribute("id","main");
let section = document.createElement("section");
main.appendChild(section);
section.setAttribute("id","section");
let headingsection = document.createElement("div");
headingsection.setAttribute("id","headingsection");
section.appendChild(headingsection);
let title = document.createElement('h1');
title.innerText="DOM Manipulation with Forms";
title.setAttribute("id","title");
headingsection.classList.add("container-fluid");
headingsection.appendChild(title);
let descriptionsection = document.createElement("div");
descriptionsection.setAttribute("id","descriptionsection")
section.appendChild(descriptionsection);
let description = document.createElement("p");
description.innerHTML=`<strong>Favorite Food-Recipe Feedback Form</strong>`;
description.setAttribute("id","description");
descriptionsection.appendChild(description);
let formsection= document.createElement("div");
section.appendChild(formsection);
formsection.setAttribute("id","formsection");
let form = document.createElement("form");
form.setAttribute("id","form");
formsection.appendChild(form);
let formgroup=document.createElement("div");
formgroup.classList.add("form-group");
form.appendChild(formgroup);

let personalInfo =  document.createElement("div");
personalInfo.setAttribute("id","personalInfo")

let firstnamelabel=document.createElement("label");
firstnamelabel.innerText="FirstName:";
let firstname=document.createElement("input");
firstname.setAttribute("id","first-name");
firstname.setAttribute("placeholder","first-name");
firstname.setAttribute("required",'');

let lastnamelabel=document.createElement("label");
lastnamelabel.innerText="LastName:";
let lastname=document.createElement("input");
lastname.setAttribute("id","last-name");
lastname.setAttribute("placeholder","last-name");
lastname.setAttribute("required",'');

let addresslabel=document.createElement("label");
addresslabel.innerText="Address:";
let address=document.createElement("textarea");
address.setAttribute("id","address");
address.setAttribute("type","text")
address.setAttribute("placeholder","address");
address.setAttribute("cols","50");

let pincodelabel = document.createElement("label");
pincodelabel.innerText="Pincode:";
let pincode=document.createElement("input");
pincode.setAttribute("id","pincode");
pincode.setAttribute("placeholder","pincode");
pincode.setAttribute("required",'');

personalInfo.append(firstnamelabel,firstname,lastnamelabel,lastname,addresslabel,address,pincodelabel,pincode);
formgroup.append(personalInfo);    

let genderSection = document.createElement("div");
genderSection.setAttribute("id","genderSection")

let malelabel=document.createElement("label");
malelabel.innerText="Male:"
let male =  document.createElement("input");
male.type="radio";
male.value="Male";
male.setAttribute("name","gender");

let femalelabel=document.createElement("label");
femalelabel.innerText="Female:"
let female =  document.createElement("input");
female.type="radio";
female.value="Female";
female.setAttribute("name","gender");

genderSection.append(malelabel,male,femalelabel,female);  
formgroup.append(genderSection);

let foodSection=document.createElement("div");
foodSection.setAttribute("id","foodSection");
formgroup.append(foodSection);

let foodrecipes = document.createElement("label");
foodrecipes.innerText="FAV-Food Recipes of You: ";
let indianlabel= document.createElement("label");
indianlabel.innerText="Indian:";
let indian=document.createElement("input");
indian.type="checkbox";
indian.value="Indian";
indian.setAttribute("name","food");

let chineselabel= document.createElement("label");
chineselabel.innerText="Chinese:";
let chinese=document.createElement("input");
chinese.type="checkbox";
chinese.value="Chinese";
chinese.setAttribute("name","food");

let amercianlabel= document.createElement("label");
amercianlabel.innerText="American:";
let american=document.createElement("input");
american.type="checkbox";
american.value="American";
american.setAttribute("name","food");

let koreanlabel= document.createElement("label");
koreanlabel.innerText="Korean:";
let korean=document.createElement("input");
korean.type="checkbox";
korean.value="Korean";
korean.setAttribute("name","food");

let italianlabel= document.createElement("label");
italianlabel.innerText="Italian:";
let italian=document.createElement("input");
italian.type="checkbox";
italian.value="Italian";
italian.setAttribute("name","food");
foodSection.append(foodrecipes,indianlabel,indian,chineselabel,chinese,amercianlabel,american,koreanlabel,korean,italianlabel,italian);

let lastSection = document.createElement("div");
lastSection.setAttribute("id","lastsection");

let statelabel = document.createElement("label");
statelabel.innerText="State:"
let state= document.createElement("input");
state.setAttribute("id","state");
state.setAttribute("placeholder","State");
state.setAttribute("required",'');

let countrylabel=document.createElement("label");
countrylabel.innerText="Country:";
let country= document.createElement("input");
country.setAttribute("id","country");
country.setAttribute("placeholder","Country");
country.setAttribute("required",'');

lastSection.append(statelabel,state,countrylabel,country);
formgroup.append(lastSection);

let buttonsection=document.createElement("div");
buttonsection.setAttribute("id","buttonsection");
form.append(buttonsection);
let submit = document.createElement("button");
submit.innerText="SUBMIT";
submit.setAttribute("id","submit");
submit.classList.add("btn","btn-primary");

buttonsection.append(submit);

let tablesection = document.createElement("div");
tablesection.setAttribute("id","tablesection");
tablesection.classList.add("table","table-responsive")
let tabel=document.createElement("table");
tabel.classList.add("table","table-bordered");
tablesection.append(tabel);
let thead=`<thead><tr>
    <td>FirstName</td>
    <td>LastName</td>
    <td>Address</td>
    <td>Pincode</td>
    <td>Gender</td>
    <td>Fav-Recipe</td>
    <td>State</td>
    <td>Country</td>
    </tr></thead>`;
let tbody =document.createElement("tbody");
tbody.setAttribute("id","tbody");
tabel.innerHTML =`${thead}`;
tabel.append(tbody);

section.append(tablesection);


const alertmessage= document.createElement("p");
    alertmessage.innerHTML=`<strong>Please provide your input for all the fields!</strong>`;
    alertmessage.style.color="red";
    alertmessage.style.display="none";
    buttonsection.append(alertmessage);

function fooditems(){
    let gender=document.querySelector('input[name=gender]:checked');
    let food='';
    let food_items=document.getElementsByName("food");
        for(let i=0;i<food_items.length;i++){
            if(food_items[i].checked){
                food+=food_items[i].value+ " "
            }
        }
        if(food==""){
            alertmessage.style.display="block";  
        }
    
    else
    {
        tbody.innerHTML+=`<tr>
    <td>${firstname.value}</td>
    <td>${lastname.value}</td>
    <td>${address.value}</td>
    <td>${pincode.value}</td>
    <td>${gender.value}</td>
    <td>${food}</td>
    <td>${state.value}</td>
    <td>${country.value}</td>
    </tr>`;   
    alertmessage.style.display="none";    
    } 
         
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
  if(fooditems){
    fooditems();
    document.getElementById("form").reset();
    
  }

})






