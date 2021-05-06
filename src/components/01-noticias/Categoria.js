import React from 'react'

const Categoria = ({categoriaList, setCategoria}) => {
    const definirCategoria = e =>{
        setCategoria(e.target.value);
    }
    return (
        <div className="input-group mb-3 ">
            <div className="input-group-prepend">
                <label className="input-group-text" >Categorías:</label>
            </div>
            <select name="categoriaselector" className="custom-select" id="inputGroupSelect01" onChange={definirCategoria}>
                    {categoriaList.map(cat=>(
                        <option key={Object.keys(cat)} value={Object.keys(cat)}>{Object.values(cat)}</option>
                    ))}
            </select>
        </div>
    )
}

export default Categoria
