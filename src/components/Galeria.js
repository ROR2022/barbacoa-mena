import React from 'react'
import Cabecera from './Cabecera'
import Navbar from './Navbar'
import '../styles/galeria.css'
import { images } from '../dataImages'

const Galeria = () => {
  return (
    <div>
      <Cabecera/>
      <Navbar/>
    <div className='main-cont2'>

      {images.map(el=>
            <img key={el.id} onClick={(e)=>window.open(e.target.src)} className={el.alias} src={el.url} alt=''/>
        )}
      
      </div>
    </div>
  )
}

export default Galeria