function renderizarHeader() {
    // Crea instancia de XMLHttpRequest ajax
    var xhr = new XMLHttpRequest();

    // url del archivo de datos
    var url = './components/header/index.html';

    // GET para obtener los datos
    xhr.open('GET', url, true);

    // Configurar el evento de carga
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Si la solicitud es exitosa, mostrar los datos en el contenedor
            document.getElementById('header').innerHTML = xhr.responseText;

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

// Función para renderizar el header cuando la página cargue
document.addEventListener('DOMContentLoaded', renderizarHeader);