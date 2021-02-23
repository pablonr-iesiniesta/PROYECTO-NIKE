const fila = document.querySelector('.contenedor-carousel');
const albums = document.querySelectorAll('.album');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ----- ----- Flecha Derecha ----- ----- 
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ----- ----- Flecha Izquierda ----- ----- 
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ----- ----- Paginación ----- ----- 
const numeroPaginas = Math.ceil(albums.length / 5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores') .appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });  
    

}

// ----- ----- Hover ----- ----- 
albums.forEach((album) => {
    album.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            albums.forEach(album => album.classList.remove('hover'));
            elemento.classList.add('hover');
        });
    })
});

fila.addEventListener('mouseleave', () => {
    albums.forEach(album => album.classList.remove('hover'));
});