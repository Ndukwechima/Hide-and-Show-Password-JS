let eyeicon = document.getElementById("eyeicon");
let passsword = document.getElementById("password");

eyeicon.onclick = function(){
    if(passsword.type == "password"){
        passsword.type = "text";
        eyeicon.src = "img/eye-open.png"
    }else{
        passsword.type = "password";
        eyeicon.src = "img/eye-close.png"

    }
}

