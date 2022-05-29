import React from 'react'
import '../styles/menu.css'
import Cabecera from './Cabecera'
import Navbar from './Navbar'
import Direc from './Direc'

const Menu = () => {
  return (
      <div>
          <Cabecera/>
          <Navbar/>
            <div className='menu-cont'>
                <img className='logo-menu' src="images/logo1.jpg" alt="" />
        <div className="tc1">TACOS DE BARBACOA</div>
            <div className="tacos">
                <h3>TACO SOLO <span className="precios1">$17</span></h3>
                <h3>ORDEN DE 3 TACOS <span className="precios1">$50</span></h3>
            </div>
            
        <div className="tc1">BARBACOA</div>
            <div className="tacos">
                <h3>250 GRS <span className="precios1">$90</span></h3>
                <h3>MEDIO KILO <span className="precios1">$180</span></h3>
                <h3>1 KILO <span className="precios1">$360</span></h3>
            </div>
            
            <div className="tacos2">PLATILLO <span className="precios2">$50</span></div>
            
            <div className='tc1'>BEBIDAS</div>
            <div className="tacos">
                <h3>AGUA<span className="precios1">$15</span></h3>
                <h3>REFRESCO<span className="precios1">$20</span></h3>
                <h3>CERVEZA<span className="precios1">$25</span></h3>
            </div>
            
    </div>
    <div className='domi'><Direc/> </div>
    
      </div>
    
  )
}

export default Menu