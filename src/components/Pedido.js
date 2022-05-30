import React, { useState } from 'react'
import Cabecera from './Cabecera';
import Navbar from './Navbar';
import Mipedido from './Mipedido';
import '../styles/pedido.css'



const initialForm = {
    nombre: "",
    domicilio: "",
    tipo:"",
    tacos:0,
    platillos:0,
    ordenes:0,
    kilos:0,
    medios:0,
    cuartos:0,
    agua:0,
    refresco:0,
    cerveza:0
}



const Pedido = () => {

    const [form, setForm] = useState(initialForm);
    

    const llenado = (e) =>{
        let val= e.target.value;
        let etq= e.target.id;
        setForm({
            ...form,
            [etq]: val
        })
    }
    
    const ocultar = (e) =>{
        let etq = e.target.id;

        
        if (etq === "sele1"){
            if (e.target.value==="tp") return;
            let inp = document.getElementById(etq);
            inp.style.display= "none";
            return
        }
        if( etq==='tacos'){
            
            
            let inp= document.getElementById('mistacos');
            inp.style.display= 'none';
            let tac= document.getElementById('tacos');
            tac.value=0;
            return
        }
        if (etq==="nombre" && e.target.value==="") return;
        if (etq==="domicilio" && e.target.vaue==="") return;
         
        
        let nom = e.target.name;
        let inp = document.getElementById(etq);
        let lbl = document.getElementById(nom);
           inp.style.display= "none";
           lbl.style.display= "none";
   }
   
    const limpiarForm = ()=> {
        setForm(initialForm);
    }
    

    const seleccion1 = (e)=>{
        let op= e.target.value;
        if (op==="ad"){
            let domi= document.getElementsByClassName('direc');
            for (let item of domi){
                item.style.display='block';
            }
            setForm({
                ...form,
                tipo: "A Domicilio"
            })
        }
        if (op==="pl"){
            setForm({
                ...form,
                tipo: "Para Llevar"
            })
        }
        if (op==="pc"){
            setForm({
                ...form,
                tipo: "Para Comer en el Local"
            })
        }
    }

  return (
      <div>
          <Cabecera/>
          <Navbar/>
          <div className='ped-cont'>
              <form action="" className='formulario'>
              <h1 className="formulario__titulo">Hola a tus Ordenes</h1>
                    <div>
                        <input type="text" value={form.nombre} onBlur={ocultar}
                        onChange={llenado} className="formulario__input" id="nombre" name="lbl" required/>
                        <label htmlFor="nombre" className="formulario__label" id="lbl"> Nombre:</label>
                    </div> 
                

                <select className="tipo_pedido" value={form.tipo} onBlur={ocultar} 
                    onChange={seleccion1} id='sele1'>
                    <option value="tp">Tipo de Pedido:</option>
                    <option value="ad">A Domicilio</option>
                    <option value="pl">Para LLevar</option>
                    <option value="pc">Para Comer en el Local</option>
                </select>
                <input type="text" value={form.domicilio} onBlur={ocultar}
                onChange={llenado} className="formulario__input direc" id="domicilio" name="domi1" required/>
                <label htmlFor="domicilio"
                    className="formulario__label direc" id="domi1"> Domicilio:</label>
                <div className='caja1'>
                <h3 className='mistacos'>¿Tacos? 
                <input type="number" id='tacos' value={form.tacos} onChange={llenado} className='cuantos'/>
                </h3>

                <h3 className='mistacos'>¿Ordenes? 
                <input type="number" id='ordenes' value={form.ordenes} onChange={llenado} className='cuantos'/>
                </h3>
                </div>
                <div className='caja1'>
                <h3 className='mistacos'>¿Platillos? 
                <input type="number" id='platillos' value={form.platillos} onChange={llenado} className='cuantos'/>
                </h3>

                <h3 className='mistacos'>¿Kilos? 
                <input type="number" id='kilos' value={form.kilos} onChange={llenado} className='cuantos'/>
                </h3>
                </div>
                <div className='caja1'>
                <h3 className='mistacos'>¿Medios? 
                <input type="number" id='medios' value={form.medios} onChange={llenado} className='cuantos'/>
                </h3>

                <h3 className='mistacos'>¿Cuartos? 
                <input type="number" id='cuartos' value={form.cuartos} onChange={llenado} className='cuantos'/>
                </h3>
                </div>
                <div className='caja1'>
                <h3 className='mistacos'>¿Agua? 
                <input type="number" id='agua' value={form.agua} onChange={llenado} className='cuantos'/>
                </h3>

                <h3 className='mistacos'>¿Refresco? 
                <input type="number" id='refresco' value={form.refresco} onChange={llenado} className='cuantos'/>
                </h3>
                </div>
                <h3 className='mistacos'>¿Cerveza? 
                <input style={{marginTop:"2vw"}}type="number" id='cerveza' value={form.cerveza} onChange={llenado} className='cuantos'/>
                </h3>
                
            </form>
            {form.nombre.length>2 && <Mipedido data={form} limpiarForm={limpiarForm} />}
          </div>
      </div>
    
  )
}

export default Pedido