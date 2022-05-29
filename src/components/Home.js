import React from 'react'
import Cabecera from './Cabecera'
import Direc from './Direc'
import Main from './Main'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Cabecera/>
        <Navbar/>
        <Main/>
        <Direc/>
    </div>
  )
}

export default Home