import { useEffect, useState } from "react"
import axios from "axios"

export default function Prodotti() {

    const endpoint = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(handleGet, [])

    function handleGet() {
        axios.get(endpoint)
            .then(res => {
                setProducts(res.data)
            })
    }

    console.log(products);


    return (
        <>

            <main>
                <div className="row row-cols-1 row-cols-lg-3 g-3">

                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <div className="card">
                                <div className="card-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <h4>{product.title}</h4>
                                <p className="d-flex flex-column">

                                    <span>Descrizione: {product.description}</span>
                                    <span>Prezzo :{product.price}</span>
                                    <span>Rate: {product.rating.rate}</span>

                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </main>

        </>
    )
}