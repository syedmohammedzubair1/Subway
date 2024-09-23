const validate=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const mno=document.getElementById("mobile").value;
    const nameError=document.getElementById("nameError");
    const emailError=document.getElementById("emailError");
    const mobileError=document.getElementById("mobileError");
    const alphaExp=/^[a-zA-Z]+$/;
    if(name===""){
        nameError.textContent="Please enter your name";
        nameError.style.color="red";
    }else  {
        if(!(name.match(alphaExp))){
            nameError.textContent="Please enter only alphabets";
            nameError.style.color="red";   
        }
    }
    if(email===""){
        emailError.textContent="Please enter your email";
        emailError.style.color="red";
    }
    if(mno===""){
        mobileError.textContent="Please enter your mobileNo";
        mobileError.style.color="red";
    }
   


    return false;
    
    
}
