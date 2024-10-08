document.addEventListener('DOMContentLoaded',function(){

    const loginForm = document.getElementById('LoginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    loginForm.addEventListener('submit',function(event){
        event.preventDefault();
        validateForm();
    })

    emailInput.addEventListener('blur', function(){
        //TODO: Agregar método que valida el mail
    })

    emailInput.addEventListener('change',function(){
        //TODO: Agregar método que limpie el error
    })

    PasswordInput.addEventListener('change',function(){
        //TODO: Agregar método que limpie el error
    })
    confirmPasswordInput.addEventListener('change',function(){
        //TODO: Agregar método que limpie el error
    })

    function validateForm(){
        const isValidEmail = validateEmail()
        const isValidPassword = validatePassword()
        const PasswordMatch = validatePasswordMatch()

        if(isValidEmail && isValidPassword && PasswordMatch){
            // guardar mail en el localStorage y generar un JSON en consola
            alert('has ingresado con éxito')
        } 

    }

    function validateEmail(){
        const emailregex = /^[a-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValue = emailInput.ariaValueMax.trim() // eñ trim elimina espacios vacios al comienzo o al final del input

        if(!emailregex.test(email.value)){
            //TODO. mostrar error
            return false
        }
        
        return true

    }

    function validatePassword(){
        const passwordValue = passwordInput.value.trim()

        if(passwordValue.lenght < 6){
            //TODO. mostrar error 
            return false
        }

        return true
    }

    function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if(passwordValue = passwordInput){
            showError(confirmPasswordError, 'Las constraseñas no coinciden')
            return false;
        }

        return true;
    }

    function showError(errorElement, message){
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    
    }

    function clearError(errorElement,){
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }


    
})