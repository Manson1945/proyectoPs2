
let juegos = []

fetch ("./juegos.json")
    .then((response) => response.json())
    .then((info) => {
        juegos = info;

        guardarJuegosLS(juegos);

    })

    .catch ((error) => {
        console.error("error al cargar el archivo JSON:" , error)
    });


        /*-----GUARDAR Y CARGAR JUEGOS-----*/


const guardarJuegosLS = (juegos)=> {

    localStorage.setItem("juegos" , JSON.stringify(juegos));

     
}


const cargarJuegosLS = () => {

    return JSON.parse(localStorage.getItem("juegos")) || [];

} 

        /* RENDER DEL MAIN! */


const renderJuegos = () => {

    const juegos = cargarJuegosLS();

    let salida = "";
    
    for (game of juegos) {

        salida += `<div class="gamesRender">

                    <img src="${game.img}"> </img>

                    <div class="gameInfo">
                    <h1 class="name">${game.name}</h1>

                    <div class="fiContainer">
                    <h2 class="firstInfo">${game.dev}</h2>
                    <h2 class="firstInfo">${game.genre}</h2>
                    </div>
                    
                    <h3 class="price">$ ${game.price}</h3>
                    <button class="saleBtn" onclick="agregarAlCarrito(${game.id})"><i class="fa-solid fa-cart-shopping"></i> Agregar </button>
                    
                    
                    </div>


                </div>
                    `
    }

    document.getElementById("renderContainer").innerHTML = salida;

}





cargarJuegosLS();
renderJuegos();
renderFooter();

