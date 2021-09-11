export const categorias = (cantidad) => {

    const url_generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=7bb9d1d7606307a16a7d415c35c29495&language=es-ES`;

    const llave = "7bb9d1d7606307a16a7d415c35c29495";

    fetch(
        url_generos +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`Error: ${response.statusText} Codigo: ${response.status}
        `);
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data);
            //console.log(data.genres);
            imprimirHTML(data.genres);
        });
    });
};

function imprimirHTML(categorias) {
    let html = '';
    let html_comedia = '';
    categorias.forEach((generos) => {

        html += `
        <ul><li>
        ID:  ${generos.id}  ------------  Categoria:  ${generos.name}
          </li></ul>
        
        `;
    });
    const contenedorApp = document.querySelector("#app");
    contenedorApp.innerHTML = html;
};