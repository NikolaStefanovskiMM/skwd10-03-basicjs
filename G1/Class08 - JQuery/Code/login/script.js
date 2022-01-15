var logInButton = $("#logIn");
var logOutButton = $("#logOut");
var inputs = $("input");
var logInForm = $("#logInForm");
var h1 = $("#text");

logOutButton.hide();

logInButton.click(function() {
    var valid = validateFields(inputs);
    var password = parseInt(inputs[3].value);
    if (!password) {
        valid = false;
    }
    if(!valid) {
        h1.text("Please enter valid fields");
        h1.css("color", "red");
    } else {
        var korisnik = new User(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        h1.text(`Welcome user: ${korisnik.userName}`);
        h1.css("color", "green");
        logInForm.hide();
        logOutButton.show();
    }
});

logOutButton.click(function() {
    logInForm.show();
    logOutButton.hide();
    h1.text("");
    for(let i = 0; i < inputs.length; i++)
        inputs[i].value = "";
});

function User(firstName, lastName, email, password) {
    this.name = firstName;
    this.surName = lastName;
    this.email = email;
    this.password = password;
    this.userName = firstName + " " + lastName;
}

function validateFields(inputs) {
    var valid = true;
    for(let i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) {
            valid = false;
            break;
        }
    }
    return valid;
}