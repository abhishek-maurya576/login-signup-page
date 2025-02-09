// get elements
const loginForm = document.getElementById('loginForm')
const registerForm = document.getElementById('registerForm')

// show register form
function showRegister() {
    loginForm.classList.add('hide')
    registerForm.classList.remove('hide')
}

// show login form
function showLogin() {
    registerForm.classList.add('hide')
    loginForm.classList.remove('hide')
}

// form validation
const forms = document.querySelectorAll('form')
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        // get inputs
        const inputs = form.querySelectorAll('.input-box')
        let isValid = true
        
        // check empty fields
        inputs.forEach(input => {
            if(!input.value.trim()) {
                isValid = false
                input.style.borderColor = 'red'
            } else {
                input.style.borderColor = '#ddd'
            }
        })
        
        // validate email
        const emailInput = form.querySelector('input[type="email"]')
        if(emailInput && !validateEmail(emailInput.value)) {
            isValid = false
            emailInput.style.borderColor = 'red'
        }
        
        // validate password
        if(form.id === 'registerForm') {
            const password = form.querySelectorAll('input[type="password"]')[0]
            const confirm = form.querySelectorAll('input[type="password"]')[1]
            
            if(password.value !== confirm.value) {
                isValid = false
                password.style.borderColor = 'red'
                confirm.style.borderColor = 'red'
                alert('Passwords do not match!')
            }
        }
        
        // if form is valid
        if(isValid) {
            // normally would send to server
            alert(form.id === 'loginForm' ? 'Login Success!' : 'Registration Success!')
            form.reset()
        }
    })
})

// email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

// remove red border on input
const inputs = document.querySelectorAll('.input-box')
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.style.borderColor = '#ddd'
    })
})
