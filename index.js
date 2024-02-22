function validateForm()
{
    var username=document.getElementById("username").value;

    var email=document.getElemmentById("email").value;
    document.getElementById("password").value;

    var isvalid = true;

    document.getElementById("usernameError").textContent= " ";
    document.getElementById("emailError").textContent= " ";
    document.getElementById("passwordError").textContent= " ";

    if(username === "")
    {
        document.getElementById("usernameError").textContext="Usename is required";
         isValid = false;
    }
 

    if(email === "")
    {
        document.getElementById("emailError").textContext="email is required";
         isValid = false;
    } 
    else if(!isValidEmail(email))
    {
         document.getElementById("emailError").textContent="Invalid email format";
         isvalid = false;
    }
       
    if(password === "")
    {
        document.getElementById("passwordError").textContent="password is required";
        isValid = false;
    }

    return isValid;

}
function isValidEmail(email)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkPassword()
{
    var password=document.getElementById("password").value;
    var strengthText=document.getElementById("passwordStrength");


    //regular expresion
    var hasLowerCase=/[a-z]/.test(password);
    var hasUpperCase=/[A-Z]/.test(password);
    var hasNumbers=/\d/.test(password);
    var hasSpecialchars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    var isLengthValid = password.length >=8;

    if(hasLowerCase && hasUpperCase && hasNumbers && hasSpecialchars&&isLengthValid)
    {
        strengthText.textContent="Strong password!";

    }
    else{
        strengthText.textContent="Password must have at least 8 charcters including uppercase,lowercase,numbers,and special charcter.";
    }
}
