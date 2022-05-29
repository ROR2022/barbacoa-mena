import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'

const Main = () => {
  return (
    <div className='main-cont1'>
      <div className='main-cont'>
        <Link to='/menu'><img src="images/logo1.jpg" alt=""/></Link>
        <Link to='/pedido'><img src="images/pedido1.png" alt=""/></Link>
        <Link to='/galeria'><img src="images/galeria.png" alt=""/></Link>
        
        
        <a href="https://www.google.com.mx/maps/place/Barbacoa+de+puerco+MENA/@18.348368,-99.5390092,19.79z/data=!4m13!1m7!3m6!1s0x85cc38746a6206a7:0x57de5f5c8c64c42b!2sIguala+de+la+Independencia,+Gro.!3b1!8m2!3d18.3448477!4d-99.5397344!3m4!1s0x85cc39bb7954dea9:0x6dbb790d00a60617!8m2!3d18.3484252!4d-99.5389806?hl=es-419">
          <img src="images/ubi1.jpg" alt=""/>
        </a>
        <a href="tel:+527621163871">
          <img src="images/llamar1.png" alt=""/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5217621163871&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20un%20pedido!">
          <img src="images/wats2.png" alt=""/>
        </a>
        <a href="https://www.facebook.com/Taquer%C3%ADa-Mena-Los-Mejores-Tacos-De-Barbacoa-De-Cerdo-104893912121712">
          <img src="images/face2.png" alt=""/>
        </a>
        <a href="mailto:alejandromr65@gmail.com">
          <img src="images/mail1.png" alt=""/>
        </a>
      </div>
    </div>
  )
}

export default Main