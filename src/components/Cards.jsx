import React from "react"
import Counter from "./Counter"


function Cards({
    id,
    name,
    price,
    stock,
    brand,
    category,
    sDescription,
    lDescription,
    freeDeliver,
    ageFrom,
    ageTo,
    photo
}) {

    

    return (
        <div className="card__container">
            <img src={photo} alt={sDescription} />
            <div className='card__data'>
                <h2>{name} <span>({brand})</span></h2>
                <b>{category}</b><br />
                <b>$ {price}</b>
                <p>Edad: {ageFrom} - {ageTo}</p>
                {/* <p>{sDescription}</p> */}
                <p>{lDescription}</p>
                <span> Envio:{freeDeliver ? <span className="free__deliver"> Sin cargo.</span> : " Con cargo"}
                </span>
                <p>Stock Disponible: {stock}</p>
            </div>
            <Counter
                id={id}
                productData={{
                    name,
                    photo,
                    category,
                    brand,
                    price,
                    sDescription,
                    freeDeliver
                }}
                />
        </div>
    )
}

export default Cards