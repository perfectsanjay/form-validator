const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message')

let isValid = false;
let passwordMatch = false;

// validate form
function ValidateForm(){
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please fill out all fields'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        return;
    }
    if (password1El.value === password2El.value){
        passwordMatch = true
        password1El.style.color = 'green'
        password2El.style.color = 'green'
    }
    else{
        passwordMatch = false
        message.textContent = 'Make sure your password match'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        password1El.style.color = 'red'
        password2El.style.color = 'red'
        return;

    }
    // if form is valid and password is match
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Register'
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'

    }
    
}

// store data
function storeData(){
    user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user)
}

// function for processing form data
function processFormData(e){
    e.preventDefault()
    ValidateForm()
    if (isValid && passwordMatch){
        storeData()
    }
}


// add Event Listener
form.addEventListener('submit',processFormData)