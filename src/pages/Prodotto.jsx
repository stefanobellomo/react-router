import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Prodotto() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const nextId = Number(id) + 1
    const prevId = Number(id) - 1

    function fetchData() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data)
                if (response.data === '') {
                    console.log('error 404');
                    navigate('/errore')
                }
            })
    }

    useEffect(fetchData, [id])

    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>{product.title}</h1>
                                <Link className="btn btn-dark" to={`/prodotti`}>Ritorna ai prodotti</Link>
                                <Link className="btn btn-dark" to={`/prodotti/${prevId}`}>Prodotto precedente</Link>
                                <Link className="btn btn-dark" to={`/prodotti/${nextId}`}>Prodotto successivo</Link>
                            </div>


                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}