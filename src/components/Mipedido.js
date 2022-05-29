import React, { useState,useEffect } from 'react'
import '../styles/mipedido.css'

const Mipedido = ({data}) => {
  const [sub, setSub]=useState(0);
  const {nombre,tipo,tacos,kilos,medios,cuartos,ordenes,platillos,domicilio,agua,refresco,cerveza}=data;
  
  useEffect(() => {
    setSub(s=> s= tacos*17+kilos*360+medios*180+cuartos*90+ordenes*50+platillos*50+agua*15+refresco*20+cerveza*25)
  }, [data])
  
  
  const enviarOrden = ()=>{

        const url = 'https://api.whatsapp.com/';
        const telefono = '5217621163871';

        let pedido='';
        if(tacos>0) pedido+= `%0A ${tacos} tacos %0A`;
        if(ordenes>0) pedido+= `%0A ${ordenes} ordenes %0A`;
        if(platillos>0) pedido+= `%0A ${platillos} platillos %0A`;
        if(kilos>0) pedido+= `%0A ${kilos} kilos %0A`;
        if(medios>0) pedido+= `%0A ${medios} medios %0A`;
        if(cuartos>0) pedido+= `%0A ${cuartos} cuartos %0A`;
        if(agua>0) pedido+= `%0A ${agua} agua %0A`;
        if(refresco>0) pedido+= `%0A ${refresco} refresco %0A`;
        if(cerveza>0) pedido+= `%0A ${cerveza} cereveza %0A`;


        let mensaje = `send?phone=${telefono}
                    &text=Hola soy:%0A${nombre}
                    %0Ami servivicio es:%0A${tipo}`;

        if(domicilio!=='') mensaje+= `%0Ami domicilio es: %0A${domicilio}`;

            mensaje+= `%0Ami pedido es:%0A${pedido}
                    %0Ami sub-total es:%0A$${sub}.00`;

        window.open(url + mensaje);
        window.location.reload();
  }
  
  return (
    <div className='miped-cont'> 

            <h3 className='pedido'>Pedido para: </h3>
            <h3 className='cliente'>{nombre}</h3>

            <h3 style={{marginTop:"-3vw"}}className='pedido'>Servicio:</h3>
            <h3 className='cliente'>{tipo}</h3>

            {tacos>0 && <h3 className='orden'> {tacos} tacos ::$ {tacos*17}</h3>}
            {ordenes>0 && <h3 className='orden'> {ordenes} ordenes ::$ {ordenes*50}</h3>}
            {platillos>0 && <h3 className='orden'> {platillos} platillos ::$ {platillos*50}</h3>}
            {kilos>0 && <h3 className='orden'> {kilos} kilos ::$ {kilos*360}</h3>}
            {medios>0 && <h3 className='orden'> {medios} medios ::$ {medios*180}</h3>}
            {cuartos>0 && <h3 className='orden'> {cuartos} cuartos ::$ {cuartos*90}</h3>}
            {agua>0 && <h3 className='orden'> {agua} agua ::$ {agua*15}</h3>}
            {refresco>0 && <h3 className='orden'> {refresco} refresco ::$ {refresco*20}</h3>}
            {cerveza>0 && <h3 className='orden'> {cerveza} cerveza ::$ {cerveza*25}</h3>}

            <h3 className='cliente'>total:${sub}.00</h3>

            {sub>0 && <button className='miboton2' onClick={enviarOrden}>enviar orden</button>}
    </div>
  )
}

export default Mipedido






/* let enviarwats = (direccion,ubicacion) =>{

  let nombre = document.querySelector('#nombre').value;
  let pedido = "";

      for (let i =0; i < sols.length; i++){
          if (sols[i][0]>0){
              let cant = sols[i][0];
              let tipo = sols[i][1];
              pedido += `%0A ${cant} ${tipo} %0A`;
          }
          
      }

      let mensaje = `send?phone=${telefono}
                    &text=Hola soy:%0A${nombre}
                    %0AMi Ubicacion es:%0A${ubicacion}
                    %0Ami domicilio es:%0A${direccion}
                    %0Ami pedido es:%0A${pedido}
                    %0Ami sub-total es:%0A$${subtot}.00`;
      if(isMobile()) {
          window.open(urlMobile + mensaje);
          window.open(ubicacion,"_blank");
          location.reload();
      }else{
          window.open(urlDesktop + mensaje);
          window.open(ubicacion,"_blank");
          location.reload();
      }
     
}

let enviarDatos = () => {
  
   let c1 = obtenerlong();
   let c2 = obtenerlat();
   
  setTimeout(() => {
      
      let tipo = document.querySelector(".tipo_pedido");
      console.log("tipo de servicio:",tipo.value);
      if (tipo.value == "ad") {
          let direccion = document.querySelector('#direccion').value;
          let ubicacion =`https://www.google.com.mx/maps/@${c2},${c1},15z?hl=es-419`;
          enviarwats(direccion,ubicacion);
      } else if (tipo.value == "pl"){
          let direccion = "MI SERVICIO ES PARA LLEVAR";
          let ubicacion = "YO ME LO LLEVO";
          enviarwats(direccion,ubicacion);
      } else if (tipo.value == "pc"){
          let direccion = "MI SERVICIO ES PARA COMER EN EL LOCAL";
          let ubicacion = "ESTOY EN UNA MESA";
          enviarwats(direccion,ubicacion);
      }
      
  }, 500);
} */