
function validate(){
var names=document.getElementById("username");
var password=document.getElementById("password");
var email=document.getElementById("email");

    if(names.value==""){
        alert("must have a user name");
        document.form1.username.focuse();
        return false;
    }

    if(password.value==""){
        alert("conform  a pssword");
        document.form1.password.focuse();
        return false;
    }

    if(email.value==""){
        alert("must have a user email");
        document.form1.email.focuse();
        return false;
    }
    return true;
}

