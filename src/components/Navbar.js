import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import '../styles/iconoscss.css'

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <div className='mi-ul'>
            <Link to='/' id='home' className='mi-li'><span className='grupo'><img className='icono' src="images/home.png" alt="" /> Inicio</span></Link>
            <Link to='/menu' id='menu' className='mi-li'><span className='grupo'><img className='icono' src="images/iconomenu.png" alt="" /> Menu</span></Link>
            <Link to='/pedido' id='pedido' className='mi-li'><span className='grupo'><img className='icono' src="images/orden.png" alt="" /> Pedido</span></Link>
            <Link to='/galeria' id='galeria' className='mi-li'><span className='grupo'><img className='icono' src="images/gallery.png" alt="" /> Galeria</span></Link>

            <a href="https://www.google.com.mx/maps/place/Barbacoa+de+puerco+MENA/@18.348368,-99.5390092,19.79z/data=!4m13!1m7!3m6!1s0x85cc38746a6206a7:0x57de5f5c8c64c42b!2sIguala+de+la+Independencia,+Gro.!3b1!8m2!3d18.3448477!4d-99.5397344!3m4!1s0x85cc39bb7954dea9:0x6dbb790d00a60617!8m2!3d18.3484252!4d-99.5389806?hl=es-419"
            id='ubicacion' className='mi-li'><span className='grupo'><img className='icono' src="images/iconoubi.png" alt="" /> Ubicacion</span></a>

            <a href="tel:+527621163871" id='telefono' className='mi-li'><span className='grupo'><img className='icono' src="images/iconotel.png" alt="" /> Telefono</span></a>

            <a href="https://api.whatsapp.com/send?phone=5217621163871&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20un%20pedido!"
            id='watsupp' className='mi-li'><span className='grupo'><img className='icono' src="images/iconowats.png" alt="" /> whatsapp</span></a>

            <a href="https://www.facebook.com/Taquer%C3%ADa-Mena-Los-Mejores-Tacos-De-Barbacoa-De-Cerdo-104893912121712"
            id='facebook' className='mi-li'><span className='grupo'><img className='icono' src="images/iconoface.png" alt="" /> Facebook</span></a>

            <a href="mailto:alejandromr65@gmail.com" id='mail' className='mi-li'><span className='grupo'><img className='icono' src="images/iconomail.png" alt="" /> Mail</span></a>

            
            
        </div>
            
    </div>
  )
}

export default Navbar