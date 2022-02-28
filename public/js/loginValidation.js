window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit',(e)=>{

        let errores = [];

        let email = document.getElementById('email');
        let contraseña = document.getElementById('password');

        if(email.value == ''){
            errores.push('El campo de email tiene que estar completo');
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