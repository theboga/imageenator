import React, { useEffect, useState } from 'react'
import Formulario from './Formulario'
import ListaImagen from './ListaImagen';

const AppImagenes = () => {   
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState([]);
    const [restante, setRestante] = useState(0);
    const [actual, setActual] = useState(1);
    const [isNew, setIsNew] = useState(true);

    const consultarApi = async ()=>{
        if (busqueda === '') return;
        console.log(`actual:${actual} isnew:${isNew} restante${restante}`)
        const key = '21167018-f2d20de21a6b2376d0908905a';
        const img_pag = 30;
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${img_pag}&page=${actual}`;

        const respuesta = await fetch(url);
        const result = await respuesta.json();
        if (isNew){
            setResultado(result.hits);                      
        } else {
            setResultado([...resultado, ...result.hits]);
        }
        // console.log(resultado.hits);
        console.log(result);
        setRestante(Math.ceil(result.totalHits/img_pag))
        setIsNew(false)
        setActual(actual + 1);           
    }
    const buscarMas = () =>{
        console.log(`boton buscarmas-->actual:${actual} isnew:${isNew} restante${restante}`)
        console.log(isNew)
        if (restante > actual){
            console.log("pasale joven")                                  
            console.log(`antes del api-->actual:${actual} isnew:${isNew} restante${restante}`)
            consultarApi();
        } else {
            console.log("error se truena")
        }
    }
    const subir = ()=>{
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior:'smooth'})
    }

    useEffect(()=>{        
        consultarApi();
    },[busqueda]);

    return (    
        <> 
        <nav className="bg-dark p-3 text-white"><h2><i class="fas fa-camera-retro"></i> imageenator</h2></nav>   
        <div className="container">            
                
            <div className="jumbotron">
                <p className="lead text-center"><small className="text-muted">Búsqueda de Imágenes sin derechos de autor</small></p>
                <Formulario setBusqueda={setBusqueda} setActual={setActual} setIsNew={setIsNew} />                
            </div>
            <hr/>
            <div className="row">
                <div className="card-columns">                    
                    <ListaImagen resultado={resultado} />
                </div>
            </div>
            <div className="container text-center mb-5 d-flex justify-content-around">
            {restante > actual ? <button className="btn btn-secondary" onClick={subir}><i class="fas fa-angle-double-up"></i> Arriba </button> :null}
                {restante > actual 
                ? <button className="btn btn-warning btn-lg" onClick={buscarMas}><i className="fas fa-search"></i> Buscar más...</button>
                : null}
                
            </div>            
        </div>

        <footer className="text-center">
            <p>
                <small className="text-muted">
                    I. Bogarin | Powered by Pixabay
                </small>
            </p>
        </footer>
        </>
        
    )
}

export default AppImagenes
