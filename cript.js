[1mdiff --git a/script.js b/script.js[m
[1mindex 1fb718a..74fdafd 100644[m
[1m--- a/script.js[m
[1m+++ b/script.js[m
[36m@@ -7,6 +7,8 @@[m [mdocument.addEventListener('DOMContentLoaded',function(){[m
     const emailError = document.getElementById('emailError');[m
     const passwordError = document.getElementById('passwordError');[m
     const confirmPasswordError = document.getElementById('confirmPasswordError');[m
[32m+[m[32m    const showHideBottom = document.getElementById('show-hide')[m
[32m+[m
 [m
     loginForm.addEventListener('submit',function(event){[m
         event.preventDefault();[m
[36m@@ -14,18 +16,28 @@[m [mdocument.addEventListener('DOMContentLoaded',function(){[m
     })[m
 [m
     emailInput.addEventListener('blur', function(){[m
[31m-        //TODO: Agregar método que valida el mail[m
[32m+[m[32m        validateEmail();[m
     })[m
 [m
     emailInput.addEventListener('change',function(){[m
[31m-        //TODO: Agregar método que limpie el error[m
[32m+[m[32m        clearError(emailError)[m
     })[m
 [m
[31m-    PasswordInput.addEventListener('change',function(){[m
[31m-        //TODO: Agregar método que limpie el error[m
[32m+[m[32m    passwordInput.addEventListener('change',function(){[m
[32m+[m[32m        clearError(passwordError)[m
     })[m
     confirmPasswordInput.addEventListener('change',function(){[m
[31m-        //TODO: Agregar método que limpie el error[m
[32m+[m[32m        clearError(confirmPasswordError)[m
[32m+[m[32m    })[m
[32m+[m
[32m+[m[32m    showHideBottom.addEventListener('click', function(){[m
[32m+[m[32m        if(passwordInput.type == 'password'){[m
[32m+[m[32m            passwordInput.type = 'text'[m
[32m+[m[32m            confirmPasswordInput.type = 'text'[m
[32m+[m[32m        }else{[m
[32m+[m[32m            passwordInput.type = 'password'[m
[32m+[m[32m            confirmPasswordInput.type = 'password'[m
[32m+[m[32m        }[m
     })[m
 [m
     function validateForm(){[m
[36m@@ -34,21 +46,26 @@[m [mdocument.addEventListener('DOMContentLoaded',function(){[m
         const PasswordMatch = validatePasswordMatch()[m
 [m
         if(isValidEmail && isValidPassword && PasswordMatch){[m
[31m-            // guardar mail en el localStorage y generar un JSON en consola[m
[31m-            alert('has ingresado con éxito')[m
[32m+[m[32m            saverToLocalStorage()[m
[32m+[m[32m            console.log('Email guardado en localStorage:', emailInput.value);[m
[32m+[m[41m   [m
[32m+[m[32m            alert('Has ingresado con éxito');[m
         } [m
 [m
     }[m
 [m
     function validateEmail(){[m
[31m-        const emailregex = /^[a-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;[m
[31m-        const emailValue = emailInput.ariaValueMax.trim() // eñ trim elimina espacios vacios al comienzo o al final del input[m
[32m+[m[32m        const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;[m
[32m+[m[32m        const emailValue = emailInput.value.trim(); // eñ trim elimina espacios vacios al comienzo o al final del input[m
[32m+[m[32m        console.log("Validando email:", emailValue); // Mensaje para ver qué se está validando[m
 [m
[31m-        if(!emailregex.test(email.value)){[m
[31m-            //TODO. mostrar error[m
[31m-            return false[m
[32m+[m
[32m+[m[32m        if(!emailregex.test(emailValue)){[m
[32m+[m[32m            showError(emailError,'Instresa un email válido')[m
[32m+[m[32m            console.log("Email no válido"); // Mensaje si el email no es válido[m
[32m+[m[32m            return false;[m
         }[m
[31m-        [m
[32m+[m[32m        console.log("Email válido"); // Mensaje si el email es válido[m
         return true[m
 [m
     }[m
[36m@@ -56,9 +73,9 @@[m [mdocument.addEventListener('DOMContentLoaded',function(){[m
     function validatePassword(){[m
         const passwordValue = passwordInput.value.trim()[m
 [m
[31m-        if(passwordValue.lenght < 6){[m
[31m-            //TODO. mostrar error [m
[31m-            return false[m
[32m+[m[32m        if(passwordValue.length < 6){[m
[32m+[m[32m            showError(passwordError,'Instresa una constraseña de almenos 6 catacteres');[m
[32m+[m[32m            return false;[m
         }[m
 [m
         return true[m
[36m@@ -68,12 +85,12 @@[m [mdocument.addEventListener('DOMContentLoaded',function(){[m
         const passwordValue = passwordInput.value.trim();[m
         const confirmPasswordValue = confirmPasswordInput.value.trim();[m
 [m
[31m-        if(passwordValue = passwordInput){[m
[32m+[m[32m        if(passwordValue != confirmPasswordValue){[m
             showError(confirmPasswordError, 'Las constraseñas no coinciden')[m
             return false;[m
         }[m
 [m
[31m-        return true;[m
[32m+[m[32m        return true[m
     }[m
 [m
     function showError(errorElement, message){[m
[36m@@ -87,6 +104,20 @@[m [mdocument.addEventListener('DOMContentLoaded',function(){[m
         errorElement.style.display = 'none';[m
     }[m
 [m
[32m+[m[32m    function saverToLocalStorage(){[m
[32m+[m[32m        const emailValue = email.value.trim();[m
[32m+[m[32m        localStorage.setItem('email',emailValue)[m
[32m+[m[32m        const body = bodyBouilderJSON()[m
[32m+[m[32m        console.log(body)[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    function bodyBouilderJSON(){[m
[32m+[m[32m        return{[m
[32m+[m[32m            "email": email.value,[m
[32m+[m[32m            "password":passwordInput.value[m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m
 [m
     [m
 })[m
\ No newline at end of file[m
[1mdiff --git a/style.css b/style.css[m
[1mindex d39df34..32563d4 100644[m
[1m--- a/style.css[m
[1m+++ b/style.css[m
[36m@@ -1,19 +1,18 @@[m
 body{[m
     font-family: Arial, Helvetica, sans-serif;[m
[31m-    background-color: #9ac9d1;[m
[31m-    margin: 0%;[m
[32m+[m[32m    background-color: #c4d8e4;[m
[32m+[m[32m    margin: 0;[m
     display: flex;[m
     justify-content: center;[m
     align-items: center;[m
     height: 100vh;[m
[31m-[m
 }[m
 [m
[31m-form{[m
[32m+[m[32mform {[m
     margin: 15px;[m
     background-color: #fff;[m
     padding: 20px;[m
[31m-    border-radius: 10px;[m
[32m+[m[32m    border-radius: 10px;[m[41m    [m
     box-shadow: 1px 1px 10px black;[m
     width: 350px;[m
 }[m
[36m@@ -23,7 +22,7 @@[m [mlabel{[m
     margin-bottom: 10px;[m
 }[m
 [m
[31m-input{[m
[32m+[m[32minput {[m
     width: 100%;[m
     padding: 8px;[m
     margin-bottom: 15px;[m
[36m@@ -31,37 +30,38 @@[m [minput{[m
 }[m
 [m
 input[type="submit"]{[m
[31m-    background-color: rgb(95, 154, 188);[m
[32m+[m[32m    margin-bottom: 15px;[m
[32m+[m[32m    background-color: rgb(123, 154, 188);[m
     color: white;[m
     cursor: pointer;[m
     border: none;[m
[31m-    transition:all .5s ease;[m
[32m+[m[32m    border-radius: 5px;[m
[32m+[m[32m    transition: all .5s ease;[m
 }[m
 [m
 input[type="submit"]:hover{[m
     background-color: rgb(95, 120, 146);[m
[31m-[m
 }[m
 [m
 .error-message{[m
     color: red;[m
     font-size: 12px;[m
[31m-    margin-top: -10%;[m
[32m+[m[32m    margin-top: -10px;[m
     margin-bottom: 10px;[m
     display: none;[m
[31m-[m
 }[m
 [m
[31m-#show-hide{[m
[32m+[m[32m#show-hide {[m
     position: relative;[m
     top: -10px;[m
     float: right;[m
     color: #a09595;[m
     cursor: pointer;[m
[31m-    border: 1px solid transparent;[m
[32m+[m[32m    border-bottom: 1px solid transparent;[m
     transition: all .5s ease;[m
 }[m
 [m
[31m-#show-hide:hover{[m
[32m+[m[32m#show-hide:hover {[m
     border-bottom: 1px solid rgb(221, 218, 218);[m
[32m+[m[32m    color: #beb4b4;[m
 }[m
\ No newline at end of file[m
