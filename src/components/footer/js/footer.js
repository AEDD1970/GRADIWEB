function sendEmail(e) {
    //Leer el formulario
    e.preventDefault()
    var emailInput = document.querySelector('.footer_input');
    var userEmail = emailInput.value;
    //funcion para validar el input del correo
    validationEmailInput(userEmail)
}

function validationEmailInput(userEmail) {
    // Expresión regular para validar el formato del correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica si el correo es válido
    if (regexCorreo.test(userEmail)) {
        // Si es válido, envía el formulario 
        document.getElementById('message_error').textContent = "";
        alert(`¡Correo electrónico válido! ${userEmail}`);
    } else {
        // Si no es válido, muestra un mensaje de error
        document.getElementById('message_error').textContent = "Invalid email";
    }
}



function renderizarFooter() {
    // Crea instancia de XMLHttpRequest ajax
    var xhr = new XMLHttpRequest();

    // url del archivo de datos
    var url = './components/footer/index.html';

    // GET para obtener los datos
    xhr.open('GET', url, true);

    // Configurar el evento de carga
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Si la solicitud es exitosa, mostrar los datos en el contenedor
            document.getElementById('footer').innerHTML = xhr.responseText;

        } else {
            // Si hay un error, mostrar un mensaje de error
            console.error('Error al cargar los datos. Estado:', xhr.status);
        }
    };

    // Configurar el evento de error
    xhr.onerror = function () {
        console.error('Error de red al intentar cargar los datos.');
    };

    // Enviar la solicitud
    xhr.send();
}

// Función para renderizar el footer cuando la página cargue
document.addEventListener('DOMContentLoaded', renderizarFooter);
