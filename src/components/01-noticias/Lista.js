import React from 'react'

const Lista = ({resultados}) => {
    return (
        <>
            {resultados.map(res=>(
                <div className="card m-1" style={{width:'18rem'}} key={res.publishedAt}>
                    <img className="card-img-top" src={res.urlToImage ? res.urlToImage:'https://st2.depositphotos.com/3223379/5688/i/600/depositphotos_56880225-stock-photo-words-news.jpg'} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{res.source.name}</h5>
                        <p className="card-text">{res.title}</p>
                        <a href={res.url} target="_blank" className="btn btn-primary">Leer noticia</a>
                    </div>
                </div>
            ))}            
        </>
    )
}

export default Lista
