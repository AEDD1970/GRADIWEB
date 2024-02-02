var data = [];
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.getElementById("carouselCard");
    const carouselData = data;

    const totalItems = carouselData.length;
    const itemWidth = document.querySelector(".carousel-item").offsetWidth;

    if (direction === "left") {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    } else {
        currentIndex = (currentIndex + 1) % totalItems;
    }

    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function renderizarCarousel() {
    // Crea instancia de XMLHttpRequest ajax
    var xhr = new XMLHttpRequest();

    // url del archivo de datos
    var url = "./components/carousel/index.html";

    // GET para obtener los datos
    xhr.open("GET", url, true);

    // Configurar el evento de carga
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Si la solicitud es exitosa, mostrar los datos en el contenedor
            const test = (document.getElementById("carousel").innerHTML =
                xhr.responseText);
        } else {
            // Si hay un error, mostrar un mensaje de error
            console.error("Error al cargar los datos. Estado:", xhr.status);
        }
    };

    // Configurar el evento de error
    xhr.onerror = function () {
        console.error("Error de red al intentar cargar los datos.");
    };

    // Enviar la solicitud
    xhr.send();
}

document.addEventListener("DOMContentLoaded", renderizarCarousel);

async function renderCardCarousel() {
    const carousel = document.getElementById("carouselCard");
    carousel.innerHTML = "";
    const { products } = await window.api.get(
        "https://gradistore-spi.herokuapp.com/products/all"
    );
    const dataProducts = products.nodes;
    data = dataProducts;
    // renderizar dinamicamente los elementos del carrusel

    const renderDivCard = dataProducts.map(
        (item, index) => {
            const numberTags = extraerNumeroDeTags(item.tags)
            const quantyStart = calcularEstrellas(numberTags)
            const {max, min} = item.prices
            return `<div class="carousel-item">
        <div>
            <img src="${item.featuredImage.url}" alt="${item.title}"></img>
            <button class="btn_card" onclick="alert('holamindo')">${index % 2 === 0 ? "Add to cart" : "See more"}</button>
        </div>
            <div class="container_description">
                <span class="tittle_card"> ${item.title}</span>
                <div>
                    <div class="rating-container">
                        <div class="rating" style="--rating: ${quantyStart}"></div>
                        <p>(${numberTags})</p>
                    </div>
                    <p class="price">
                        <span>${max.amount.toString().replace('.', ',')}$</span>
                        ${min.amount.toString().replace('.', ',')}$
                    </p>
                </div>
            </div>
         
        </div>`

        }).join("");
    carousel.innerHTML = renderDivCard;
}

setTimeout(renderCardCarousel, 100);


function calcularEstrellas(valor) {
    if (valor < 0 || valor > 500) {
        return -1; // Valor fuera de rango
    }
    return Math.ceil((valor + 1) / 100);
}

function extraerNumeroDeTags(tags) {
    //  un elemento en el array
    if (tags.length > 0) {
        const numero = parseInt(tags[0]);
        // Verificamos si la conversión fue exitosa
        if (!isNaN(numero)) {
            return numero;
        }
    }

    // s iel array esta vacion colocar 0
    return 0;
}