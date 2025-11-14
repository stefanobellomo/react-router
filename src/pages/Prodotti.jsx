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
                            <div className="card h-100 product-card d-flex flex-row p-3 gap-3">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="d-flex flex-column product-content">
                                    <h4>{product.title}</h4>

                                    <p className="description">
                                        <span>{product.description}</span>
                                    </p>
                                    <span className="bord-card fw-bold py-2">Categoria: {product.category}</span>
                                    <span className="bord-card fw-bold">Prezzo: {product.price}$</span>
                                    <span className="bord-card fw-bold py-2">Rate: {product.rating.rate}</span>
                                    <span className="bord-card fw-bold">N. Recensioni: {product.rating.count}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </main>
        </>
    )
}