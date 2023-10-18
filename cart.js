
const guardarJuegosCarrito = (games) => {

    localStorage.setItem("carrito" , JSON.stringify(games));
}

const cargarJuegosCarrito = () => {

    return JSON.parse(localStorage.getItem("carrito")) || [] ;
 
}








// creo funcion vaciarCarrito

const vaciarCarrito = () => {
    localStorage.removeItem("carrito")
    renderCarrito();
    renderBotonCarrito();
}

// creo funcion buscarProducto

const buscarProducto = (id) => {

    const juegos = cargarJuegosLS();

    return juegos.find (item => item.id === id)
} 

// creo funcion agregarAlCarrito 


/* antes de la necesidad de incorporar findIndex para que no se repita el producto */

/* const agregarAlCarrito = (id) => {   

    const carrito = cargarJuegosCarrito();
    const juego = buscarProducto (id);

    carrito.push(juego);

    guardarJuegosCarrito(carrito)

    renderBotonCarrito()

    console.log("se agrego el juego con el #" + id);
} */


/* incorporando condicional y findindex */

const agregarAlCarrito = (id) => {

    const carrito = cargarJuegosCarrito();

    if (estaEnElCarrito(id)) {

        let pos = carrito.findIndex(item => item.id === id);

        carrito[pos].cantidad += 1; 
    } else {
        const juego = buscarProducto(id);

        juego.cantidad = 1;
        carrito.push(juego)
    }

    guardarJuegosCarrito(carrito);
    renderBotonCarrito();


} 




 

/* con el primer id como parametro le estoy diciendo a la función que cuando
quiera agregar un determinado producto me tome como referencia el id
o me lo busque por el id. con el id de la const juego me trae el obejto. DESPUES 
agrega la const carrito (arriba) / agrega el evento onclick  */

/* luego se hace el push al carrito desde la const juego,
dsps se agrega la funcion guardarJuegosCarrito y se le pasa por parametro hacia donde se dirige (carrito) */



/* ahora creo la funcion totalProductosCarrito que me retorna con el length todo lo del carrito */


/* primera forma */

/* const totalProductosCarrito = ()=> {

    const juegos = cargarJuegosCarrito();

    return  juegos.length;

} */

/* ahora con la necesidad que me sume las cantidades
 muy parecido a totalPagarCarrito */

 const totalProductosCarrito = ()=> {

    const juegos = cargarJuegosCarrito();

    return juegos.reduce ((total, item) => total += item.cantidad, 0)
 }


/* creo la funcion renderBotonCarrito para actualizar la cantidad de productos en el boton del header */

const renderBotonCarrito = ()=> {

    const salida = 

    

    `
     ${totalProductosCarrito()}
     
     `

            
                document.getElementById("span").innerHTML = salida
    
}


renderBotonCarrito()


/* acá creo el carrito.html y el indexCarrito.js */

/* sigue en renderCarrito.js... */


/* primera forma */

/* const totalPagarCarrito = ()=> {

    const juegos = cargarJuegosCarrito();

    return juegos.reduce ((total, item) => total += item.precio, 0)
} */

/* con la necesidad de que me muiltiplique las cantidades */

const totalPagarCarrito = ()=> {

    const juegos = cargarJuegosCarrito();

    return juegos.reduce ((total, item) => total += item.cantidad * item.price, 0)
}

/* voy a renderCarrito y armo otra salida += para totalPagarCarrito y vaciarCarrito (creo el button) */

/* vaciarCarrito funciona pero no me borra el render, entonces a vaciarCarrito le tengo que agregar las funciones de renderCarrito
y renderBotonCarrito */

/* creamos la funcion eliminarProducto para eliminar los productos de manera individual.

llamo a el array de los productos cargados y utilizo .filter para que itere el array 
me filtre y devuelva un nuevo array con todos los id distintos al id seleccionado*/

const eliminarProducto = (id)=> {
    const carrito = cargarJuegosCarrito();

   const producto = carrito.filter (item => item.id !== id);

     guardarJuegosCarrito(producto);

     renderCarrito();
     renderBotonCarrito();
}

/* luego uso la funcion guardarJuegosCarrito() para que me devuelva el array recien creado "producto" */
/* despues de esto tengo que hacer el render de renderCarrito() y de renderBotonCarrito() */
/* asigno la funcion al boton y el paso el atributo id para que sepa a donde ir a buscar */

/*ahora deberiamos agrupar los productos en el carrito para que los mismos no se repitan
 y a la vez agragar un contador de cantidad ( x2, x3 , x4)

/*  creo la funcion estaEnElCarrito que me va a servir para esto.
uso .some para que me devuelva un booleano ( True or false) */

const estaEnElCarrito = (id)=> {
    const carrito = cargarJuegosCarrito();

   return carrito.some (item => item.id === id);
}
 
/*como debemos agregar un ATRIBUTO de cantidad ya que no lo tenemos, vamos a tener que modificar 
 nuestra funcion de agregarAlCarrito() 

 FINDINDEX te devuelve el numero de posicion de determinada condicion (linea 59)
 */


/*  ahora necesito modificar totalProductosCarrito() para que me sume tambien las cantidades ya que length me trae cantidad
 de elementos pero no las cantidades individuales (si un elemento tiene 2 o 3 no me suma el precio (linea 112)) */

 /* tambien necesito modificar totalPagarCarrito() para que me multiplique las cantidades (linea 158) */

 /* por ulitmo modifico el html de renderCarrito para que se visualice la informacion */
