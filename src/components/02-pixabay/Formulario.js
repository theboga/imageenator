import React, { useState } from 'react'

const Formulario = ({setBusqueda, setActual, setIsNew}) => {
    const [termino, setTermino] = useState('');
    
    const definirBusqueda = e =>{
        e.preventDefault();
        if (termino.trim() === ''){
            return;
        }
        setBusqueda(termino.trim());
        setActual(1);
        setIsNew(true);
    }
    return (
        <form onSubmit={definirBusqueda} >
            <div className="row">
                <div className="col-md-9 form-group">
                    <input className="form-control form-control-lg" 
                        onChange={e => setTermino(e.target.value)}  type="text"
                    />
                </div>   
                <div className="col-md-3 form-group">
                    <button className="btn btn-primary btn-lg">Buscar</button>    
                </div>
            </div>
        </form>
    )
}

export default Formulario

//21167018-f2d20de21a6b2376d0908905a
