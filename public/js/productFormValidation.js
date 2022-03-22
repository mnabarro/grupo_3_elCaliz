window.addEventListener('load', function(){
    let formulario = document.querySelector('form');

    formulario.addEventListener('submit',(e)=>{

        let errores = [];

        let fileValid = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        let nombre = document.getElementById('name');
        let description = document.getElementById('description');
        let imagen = document.getElementById('image');
        let codigo = document.getElementById('sku');
        let precio = document.getElementById('price');
        let descuento = document.getElementById('discount');
        let categorias = document.getElementById('select-state');


        if(codigo.value == ''){
            errores.push('El campo de código sku tiene que estar completo');
            
        }

        if(nombre.value == ''){
            errores.push('El campo de nombre tiene que estar completo');
            
        } else if (nombre.value.length < 5){
            errores.push('El campo de nombre debe tener al menos 5 caracteres');   
        } 

        if(description.value == ''){
            errores.push('El campo de descripcion tiene que estar completo');
        } else if (description.value.length < 20){
            errores.push('El campo de descripcion debe tener al menos 20 caracteres');
        }

        
        if(precio.value == ''){
            errores.push('El campo de precio tiene que estar completo');
        }

        if(categorias.value == ''){
            errores.push('El campo de categorias tiene que estar completo');   
        }

        if(imagen.value == ''){
            errores.push('El campo de imagen tiene que estar completo');
            
        } else if (!imagen.value.match(fileValid)){
            errores.push('Tiene que ser en un formato compatible');   
        }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector('.errores');
            ulErrores.classList.add('alert-warning');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>';
            };
        } else{
            formulario.submit();
        }

    }); 
})