document.addEventListener('DOMContentLoaded',function(){

    const loginForm = document.getElementById('LoginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showHideBottom = document.getElementById('show-hide')


    loginForm.addEventListener('submit',function(event){
        event.preventDefault();
        validateForm();
    })

    emailInput.addEventListener('blur', function(){
        validateEmail();
    })

    emailInput.addEventListener('change',function(){
        clearError(emailError)
    })

    passwordInput.addEventListener('change',function(){
        clearError(passwordError)
    })
    confirmPasswordInput.addEventListener('change',function(){
        clearError(confirmPasswordError)
    })

    showHideBottom.addEventListener('click', function(){
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text'
            confirmPasswordInput.type = 'text'
        }else{
            passwordInput.type = 'password'
            confirmPasswordInput.type = 'password'
        }
    })

    function validateForm(){
        const isValidEmail = validateEmail()
        const isValidPassword = validatePassword()
        const PasswordMatch = validatePasswordMatch()

        if(isValidEmail && isValidPassword && PasswordMatch){
            saverToLocalStorage()
            console.log('Email guardado en localStorage:', emailInput.value);
   
            alert('Has ingresado con éxito');
        } 

    }

    function validateEmail(){
        const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValue = emailInput.value.trim(); // eñ trim elimina espacios vacios al comienzo o al final del input
        console.log("Validando email:", emailValue); // Mensaje para ver qué se está validando


        if(!emailregex.test(emailValue)){
            showError(emailError,'Instresa un email válido')
            console.log("Email no válido"); // Mensaje si el email no es válido
            return false;
        }
        console.log("Email válido"); // Mensaje si el email es válido
        return true

    }

    function validatePassword(){
        const passwordValue = passwordInput.value.trim()

        if(passwordValue.length < 6){
            showError(passwordError,'Instresa una constraseña de almenos 6 catacteres');
            return false;
        }

        return true
    }

    function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if(passwordValue != confirmPasswordValue){
            showError(confirmPasswordError, 'Las constraseñas no coinciden')
            return false;
        }

        return true
    }

    function showError(errorElement, message){
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    
    }

    function clearError(errorElement,){
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    function saverToLocalStorage(){
        const emailValue = email.value.trim();
        localStorage.setItem('email',emailValue)
        const body = bodyBouilderJSON()
        console.log(body)
    }

    function bodyBouilderJSON(){
        return{
            "email": email.value,
            "password":passwordInput.value
        }
    }


    
})