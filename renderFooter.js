/* RENDER FOOTER */

const renderFooter = ()=> {

    const salida = `
    <div class="ftContainer">
    <a href="./indexJuegos.html"><img src="./ASSETS/PICS/logoPs2.png" alt="Logo"></a>
    <h1 class="footerTitle">PS STORE</h1>
    <a href="./indexJuegos.html"><img src="./ASSETS/PICS/logoPs2.png" alt="Logo"></a>
</div>


<div class="linkContainer">

<div class="footerLinks">
    <h3>PS Store</h3>
    <a href="#">Sobre nosotros</a>
    <a href="#">Contactános</a>
    <a href="#">Ley de servicios</a>
</div>

<div class="footerLinks">
    <h3>Comprar</h3>
    <a href="#">Cómo comprar</a>
    <a href="#">Lista de juegos</a>
    <a href="#">Categorías</a>
</div>

<div class="footerLinks">
    <h3>Comunidad</h3>
    <a href="#">Iniciá sesión</a>
    <a href="#">Registrate</a>
    <a href="#">Blog</a>
    
</div>

</div>

<div class="followUs">
    <h3>Seguinos</h3>
    <a href="#"><i class="fa-brands fa-facebook"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-youtube"></i></a>
</div>

<h4 class="registered">Todos los derechos reservados. <i class="fa-regular fa-registered"></i></h4>
                                                                                                     `

   document.getElementById ("footer").innerHTML = salida;
}