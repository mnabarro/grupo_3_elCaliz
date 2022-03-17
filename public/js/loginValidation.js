window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit',(e)=>{

        let errores = [];

        let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let email = document.getElementById('email');
        let contraseña = document.getElementById('password');

        if(email.value == ''){
            errores.push('El campo de email tiene que estar completo');
            
        } else if (!email.value.match(emailValid)){
            errores.push('Tiene que ser en formato mail');   
        }

        if(contraseña.value == ''){
            errores.push('El campo de contraseña tiene que estar completo');   
        }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul')
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        }

    }); 
})