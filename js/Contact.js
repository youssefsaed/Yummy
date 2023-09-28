export default function Contact() {
    const name = document.getElementById('name')
    const nameInput = document.getElementById('nameInput')
    const email = document.getElementById('email')
    const emailInput = document.getElementById('emailInput')
    const phone = document.getElementById('phone')
    const phoneInput = document.getElementById('phoneInput')
    const age = document.getElementById('age')
    const ageInput = document.getElementById('ageInput')
    const password = document.getElementById('password')
    const passwordInput = document.getElementById('passwordInput')
    const rePassword = document.getElementById('rePassword')
    const rePasswordInput = document.getElementById('rePasswordInput')
    const btnSubmit = document.getElementById('btnSubmit')



    name.addEventListener('keyup', function () {
        validatInputs()
        if (validateName()) {
            name.classList.add('valied')
            name.classList.replace('invalid', 'valied')
            nameInput.classList.add('d-none')
        }
        else {
            name.classList.replace('valied', 'invalid')
            nameInput.innerHTML ='Special 5 Characters and Numbers not allowed'
            nameInput.classList.remove('d-none')
        }
    })

    function validateName() {
        return /^[a-zA-Z]{5,15}$/.test(name.value)
    }


    email.addEventListener('keyup', function () {
        validatInputs()
        if (validateEmail()) {
            email.classList.add('valied')
            email.classList.replace('invalid', 'valied')
            emailInput.classList.add('d-none')
        }
        else {
            email.classList.replace('valied', 'invalid')
            emailInput.innerHTML ='Enter valid email. *Ex: xxx@yyy.zzz'
            emailInput.classList.remove('d-none')
        }
    })

    function validateEmail() {
        return /^[a-zA-Z0-9]{1,40}@(yahoo|gmail)\.com$/.test(email.value)
    }

    // phone input validat

    phone.addEventListener('keyup', function () {
        validatInputs()
        if (validatePhone()) {
            phone.classList.add('valied')
            phone.classList.replace('invalid', 'valied')
            phoneInput.classList.add('d-none')
        }
        else {
            phone.classList.replace('valied', 'invalid')
            phoneInput.innerHTML = 'Enter valid Phone Number Ex:(010xxxxxxxx)'
            phoneInput.classList.remove('d-none')
        }


    })

    function validatePhone() {
        return /^0(10|11|15|12)[0-9]{8}$/.test(phone.value)
    }

    //age input validate


    age.addEventListener('keyup', function () {
        validatInputs()
        if (validateAge()) {
            age.classList.add('valied')
            age.classList.replace('invalid', 'valied')
            ageInput.classList.add('d-none')
        }
        else {
            age.classList.replace('valied', 'invalid')
            ageInput.innerHTML ='Enter valid Age'
            ageInput.classList.remove('d-none')
        }
    })


    function validateAge() {
        return /^([1-9][0-9]|100)$/.test(age.value)
    }


    //password iput validate

    password.addEventListener('keyup', function () {
        validatInputs()
        if (validatePassword()) {
            password.classList.add('valied')
            password.classList.replace('invalid', 'valied')
            passwordInput.classList.add('d-none')

        }
        else {
            password.classList.replace('valied', 'invalid')
            passwordInput.innerHTML = 'Enter valid password'
            passwordInput.classList.remove('d-none')
        }

    })

    function validatePassword() {
        return /^[a-zA-Z0-9]{5}$/.test(password.value)
    }

    rePassword.addEventListener('keyup', function () {
        validatInputs()
        if (validateRepassword()) {
            rePassword.classList.add('valied')
            rePassword.classList.replace('invalid', 'valied')
            rePasswordInput.classList.add('d-none')
        }
        else {
            rePassword.classList.replace('valied', 'invalid')
            rePasswordInput.innerHTML = 'Enter valid rePassword'
            rePasswordInput.classList.remove('d-none')
        }
    })

    function validateRepassword() {
        return /^[a-zA-Z0-9]{5}$/.test(rePassword.value) && password.value === rePassword.value
    }


  
    function validatInputs() {
        if (validateName() &&
            validateEmail() &&
            validatePhone() &&
            validateAge() &&
            validatePassword() &&
            validateRepassword()) {
            btnSubmit.removeAttribute('disabled')
        }
        else {
            btnSubmit.setAttribute('disabled', true)
        }
    }


}




// nameValue, emailValue, phoneValue, ageValue, passwordValue, rePasswordValue