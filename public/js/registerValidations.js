window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit',(e)=>{

        let errores = [];

        let nombre = document.getElementById('name');
        let apellido = document.getElementById('last-name');
        let email = document.getElementById('e-mail');
        let dni = document.getElementById('dni');
        let contraseña = document.getElementById('password');
        let imagen = document.getElementById('images');

        let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(nombre.value == ''){
            errores.push('El campo de nombre tiene que estar completo');
            
        } else if (nombre.value.length < 2){
            errores.push('El campo de nombre debe tener al menos 2 caracteres');   
        } 

        if(apellido.value == ''){
            errores.push('El campo de apellido tiene que estar completo');
        } else if (apellido.value.length < 2){
            errores.push('El campo de apellido debe tener al menos 2 caracteres');
        }

        // if(emailValid.text(email)){
        //     return true;
        // } else{
        //     errores.push('El campo de email tiene que estar completo');
        // }

        if(dni.value == ''){
            errores.push('El campo de dni tiene que estar completo');
        } else if (apellido.value.length < 2){
            errores.push('El campo de dni debe tener al menos 2 caracteres');
        }

        if(contraseña.value == ''){
            errores.push('El campo de contraseña tiene que estar completo');
        } else if (contraseña.value.length < 8){
            errores.push('El campo de contraseña debe tener al menos 8 caracteres');
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