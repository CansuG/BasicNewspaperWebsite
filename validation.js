function validateForm() {

    if(!isNotEmpty() || !isText() || !isValidEmail() || !isValidPassword() ){
        return false;
    }

    if(!isValidDate()){
        alert("Please enter a valid date.")
        return false;
    }
   
    return true;

}

var formFields =["name", "surname", "birthdate","mail","password" ];

function isNotEmpty(){

    var i;
    for(i=0; i<formFields.length; i++){
        var x = document.forms["form"][formFields[i]].value ;
        if (x == "" || x == null) {
            alert(" Fields cannot be empty. ");
            return false;
        }
    }
    return true;
}

function isValidPassword() {

    var password = document.forms["form"]["password"].value ;
    var re = /(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%*#?&]).{6,15}/;

    if(!re.test(password)){
        alert("Invalid password. Password should be between 6 to 15 characters and contain at least one uppercase letter, one numeric digit, and one special character.")
        return false
    }
    return true;
}

function isText(){

    var i;
    for (i=0; i<2; i++){
        var x= document.forms["form"][formFields[i]].value;
        var j;
        for(j=0; j<x.length; j++){
            if(!isNaN(x[j])){
                alert("Name and Surname fields should be text.");
                return false;
            }
        }
        
    }
    return true;
}

function isValidDate(){

    var dateString= document.forms["form"]["birthdate"].value ;

    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];

}

function isValidEmail(){

    var re=/\S+@\S+/;
    var email= document.forms["form"]["mail"].value ;
    if(!re.test(email)){
        alert("Please enter valid e-mail.");
        return false;
    }
    return true;

}