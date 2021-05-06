import React, { useEffect, useState } from 'react';
import Categoria from './Categoria';
import axios from 'axios';
import Lista from './Lista';

const AppNoticias = () => {
    const [resultados, setResultados] = useState([]);
    const [categoria, setCategoria] = useState('general');
    const [categoriaList, setCategoriaList] = useState([        
        {'general':'General'},
        {'business':'Negocios'},
        {'entertainment':'Entretenimiento'},
        {'health':'Salud'},
        {'science':'Ciencia'},
        {'sports':'Deportes'},
        {'technology':'Tecnología'},
    ]);
    useEffect(()=>{
        console.log("use efect");
    },[resultados]);

    const buscarResultados = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=5a82bfc53e50435bb44298a9440097ec`;
        const resultado = await axios.get(url);
        setResultados(resultado.data.articles);
        console.log(resultado.data.articles);
    }

    return (
        <div className="container">
            <h2>Noticias</h2>
            <hr/>  
            <div className="row">
                <div className="col-md-8">
                    <Categoria categoriaList={categoriaList} setCategoria={setCategoria}/>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-warning btn-lg " onClick={buscarResultados}>Buscar noticias</button>
                </div>
            </div>
            <div className="row">
                <Lista resultados={resultados} />
            </div>                  
        </div>
    )
}

export default AppNoticias

//5a82bfc53e50435bb44298a9440097ec
//api
