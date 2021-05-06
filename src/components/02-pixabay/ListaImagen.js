import React from 'react'

const ListaImagen = ({resultado}) => {
    function kFor(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
    return (
        <>
            {resultado.map(res=>(
                <div className="card" key={res.id}>
                    <img src={res.webformatURL} className="card-img-top" alt={res.id} />
                    <div className="card-body">
                        {/* <h5 className="card-title">PixaBay</h5>                             */}
                        <p className="card-text">
                            <span>
                                <img width="36" height="36" src={(res.userImageURL === '')?'https://i1.sndcdn.com/avatars-000362240648-gm9l89-t240x240.jpg': res.userImageURL} className="rounded-circle mr-1" /> 
                                 {res.user}
                            </span>
                            <br/>
                            <small className="text-center">
                                #{res.id} | {kFor(res.likes)} <i className="far fa-thumbs-up"></i> | {kFor(res.views)} <i className="fas fa-eye"></i> | {kFor(res.downloads)} <i className="fas fa-download"></i> <br/>
                                <i className="fas fa-vector-square"></i>  {res.imageWidth} x {res.imageHeight} | <i className="fas fa-weight-hanging"></i> {kFor(res.imageSize)} <br/>
                                <i className="fas fa-tags"></i>  {res.tags}<br/>                                                        
                            </small>
                            <a href={res.largeImageURL} target="_blank" rel="noreferrer">Obtener imagen</a>
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListaImagen
