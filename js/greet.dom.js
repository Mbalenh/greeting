const englishLang = document.querySelector(".radioEnglish");
const isiZuluLang = document.querySelector(".radioIsiZulu");
const isiXhosaLang = document.querySelector(".radioIsiXhosa");

const clearButton = document.querySelector(".clear");
const greetButton = document.querySelector(".greetMeAdd");
const username= document.querySelector(".name");
const display =document.querySelector(".display")
const count =document.querySelector(".count")
 let language = null;
 if(localStorage.getItem("nameArray")){
 var nameArray = JSON.parse(localStorage.getItem("nameArray"));
 }
 let greetingDom = Greeting(nameArray);
 count.innerHTML= greetingDom.nameArray.length;
 englishLang.addEventListener("click", ()=>{
    language ='english';
})

isiZuluLang.addEventListener("click", ()=>{
    language ='isizulu';
})

isiXhosaLang.addEventListener("click", ()=>{
    language = 'isixhosa';
})
clearButton.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload()
    count.innerHTML= greetingDom.nameArray.length;
    
})
greetButton.addEventListener('click', ()=>{
 display.innerHTML= greetingDom.greet(username.value,language);
 greetingDom.addName(username.value,language);
 count.innerHTML= greetingDom.nameArray.length;
 localStorage.setItem("nameArray",JSON.stringify(greetingDom.nameArray));
 
})
