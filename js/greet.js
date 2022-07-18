function Greeting(names){
var nameArray =names||[];
// function clearArrayAdd(array){
// while(array.length){
//   array.pop()
// }
// } 

function addName(username, language){
  if(username === ""){
    return
  }
  if(nameArray.includes(username)){
    return
  }
  if(language === null){
    return
  }
  if(/[0-9]/.test(username)){
   return
  }
 
    nameArray.push(username);

}

function greet(username, language){
    if(username === ""){
 return "please enter username";
    }
      if(/[0-9]/.test(username)){
      return "invalid username"
    }
    if(language !== null){
    if(language ==="english"){
       return "Hello, " +  username;
     }
     if(language === "isizulu"){
       return "Sawubona, " +  username;
     }
     if(language === "isixhosa"){
       return "Molo, " +  username;  
     }
}else{
  return "please select language"
}
}

return{
    addName,
    nameArray,
    greet,
    // clearArrayAdd
}
}