let storage = [];
let pass = [];
let userinp = document.getElementById("user-inp");
let userpass = document.getElementById("user-pass");
let inpreg = document.getElementById("inpregEl");
let confpass=document.getElementById("conf-user-pass");

let tempStorage=JSON.parse(localStorage.getItem("storage"));
let tempPass=JSON.parse(localStorage.getItem("pass"));
if(tempStorage&&tempPass){
    storage=tempStorage;
    pass=tempPass;
}

console.log("storage");

/*inpreg.addEventListener("click", function() {*/
function regbtnclk(){
    if(userpass.value===confpass.value){
        
        if(userinp.value&&userpass.value&&confpass.value){
    
   
    console.log("Clicked");
    storage.push(userinp.value);
    pass.push(userpass.value);
    userinp.value = "";
    userpass.value = "";
    confpass.value="";
    localStorage.setItem("storage", JSON.stringify(storage));
    localStorage.setItem("pass", JSON.stringify(pass));
    window.open("index.html","_self");
    }
    else{
        alert("Please fill form Carefully")
        console.log("Else statement executed");
    }
}
  else{
    alert("Password Does not Match")
    userpass.value = "";
    confpass.value="";
    
  } 
}
/*});*/

/* For Login Page To Login the user */

let loginuserEl = document.getElementById("login-user-El");
let loginpassEl = document.getElementById("login-pass-El");
let loginEl = document.getElementById("login-btn-ele");
let tempUserNameData;
console.log(loginEl); 

loginEl.addEventListener("click",function(){
  console.log("Click");
  let found = false; 
  
  for (let i = 0; i < storage.length; i++) {
    if (storage[i] === loginuserEl.value&&pass[i]===loginpassEl.value) {
        tempUserNameData=storage[i];
      console.log("Yeah, you got it! Nice");
      window.open("blank");
      found = true; // Set found to true if the username is found
      break;
    }
  }
  
  if (!found) {
    alert("Username and password does'nt match Try again")
    console.log("Username not found");
  }
});