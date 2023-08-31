

function ingresar(event){
    const email = document.getElementById('correo')
    const password = document.getElementById('contrasena')
    const message = document.getElementById('message')

    if (email.value == '' && password.value == '') {
        message.style.display = 'block'
        message.firstElementChild.innerText = 'No se ingreso ni correo ni contraseña'
        // agregar clase para mostrar color rojo de error
        message.classList.add("error")
    }
    else if (email.value == '' || password.value == ''){
        message.style.display = 'block'
        message.firstElementChild.innerText = 'No se ingreso algún campo'
        message.classList.add("error")
    } else {
        message.firstElementChild.innerText = 'Datos Completos'
        message.classList.add("success")
    }

    // previene el recargar la pagina al presionar el boton 'ingresar'
    event.preventDefault()
}

document.getElementById("btn-ingresar").addEventListener('click', ingresar, false)