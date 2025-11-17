import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Prodotto() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])

    function fetchData() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data)
            }).catch(error => {
                navigate('/Prodotti')
            })

    }

    console.log(product);


    useEffect(fetchData, [])

    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>{product.title}</h1>
                                <Link className="btn btn-dark" to={`/Prodotti`}>Ritorna ai prodotti</Link>
                            </div>


                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}