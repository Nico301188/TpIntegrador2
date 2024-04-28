import { useEffect, useState } from "react"
import Cards from "./Cards"
import { getProducts } from "../util/api"



function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(
                data => setProducts(data)
            )
            .catch( err => console.error(err))
    }, [])
    

    return (
        <div style={{ display: 'flex'}}>
            <div className="card__wrapper">
                {
                    products.map(
                        product =>
                            <Cards 
                                key={product.id}
                                {...product}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default Products