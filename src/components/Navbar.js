import React from "react";
import logoAware from '../logoaware.png';
import CartWidget from "./CartWidget/CartWidget";
const Navbar = () => {
    return <div>
            
            <div>
            <img src={logoAware} style={{width:'100px',paddingTop:'20px'}} alt={'decoracion'}/>
            </div>
            <div>
                <a className='icon' href='./home'>home</a>
                <a className='icon' href='./productos'>productos</a>
                <a className='icon' href='./contacto'>contactos</a>
                <a className='icon' href='./Carrito'><CartWidget/></a>
            </div>
            
        </div>;
     
};
export default Navbar;