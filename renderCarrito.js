
/* creo el render del carrito muy parecido al render de los juegos (render.js) */

/* luego de eso creo el condicional para que si el carrito esta vacio me avise y sino haga el render */

/* vuelvo a cart.js y creo la funcion totalPagarCarrito */

const renderCarrito = () => {

    const juegos = cargarJuegosCarrito();

    let salida = "";

    if (totalProductosCarrito() === 0) {

        const salida = `
                        <div class="emptyCart">
                        <h1>Ooops...El carrito está vacio!</h1>

                        <img src="./ASSETS/PICS/carritoVolcado.png" alt="carritovolcado" >

                        <a href="./index.html">Volver al início</a>
                        </div>
                        
                        `
        document.getElementById("renderCarrito").innerHTML = salida;

    } else {
        
        for (game of juegos) {

            salida += `<div class="cartRender">
    
                      <img src="${game.img}"> </img>

                      <h1 class="shopName">${game.name}</h1>
    
                      <div class="shopInfo">
                        
                        
                        <h2 class="shopPrice"> ${game.cantidad} x $ ${game.price}  </h2>
                        <h2 class="shopPrice"> $ ${game.cantidad * game.price}  </h2>
                        <button class="suprBtn" onclick="eliminarProducto(${game.id})"> <i class="fa-solid fa-trash-can"></i></button>
                        
                        
                    </div>

                    </div>
                    
                    `          
        }

        salida += `
                    <div class="totalYbtn">
                    <h1>Total a pagar $ ${(totalPagarCarrito())}</h1>

                    <button onclick="vaciarCarrito()"> Vaciar carrito</button>
                    </div>
                    
                    
                    `

        
    
        document.getElementById("renderCarrito").innerHTML = salida;

    }
    
    

}
   
 renderCarrito(); 
 renderBotonCarrito();
 renderFooter(); 
 