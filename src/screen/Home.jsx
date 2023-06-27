import React from "react";
import logitechLogo from '../assets/logitechLogo.png'
import MenuFactura from "./MenuFactura";

function Home() {

        return(
            <div className="contenedorHome">
                <div className="menuNavegacion">
                    <div className="logoContainer">
                    <a href=""><img src={logitechLogo} className="logoLogitech" alt="Logo de Logitech" /></a>
                    </div>
                    <div className="linksContainer">

                    <a href="/MenuFactura">Facturas</a>
                    <a href="">Contacto</a>
                    <a href="">About us</a>
                    </div>
                </div>
                <div className="contenedor1">
                        <h1>Logitech</h1>
                        <h5>Descubre un mundo de posibilidades ilimitadas con nuestra revolucionaria tecnología, <br/> donde la innovación se fusiona con la simplicidad para transformar tu vida y llevar tus experiencias al siguiente nivel</h5>
                </div>
                <div className="contenedor2">
                    <h2>Registro de Stock</h2>
                    <h4> Para registrar una compra presione el botón "Factura" desplegado en el encabezado </h4>
                </div>
                <div className="footer">
                    <h5 className="text-white">Logitech &copy; All rights reserved </h5>

                </div>
            </div>
            
        )
}

export default Home