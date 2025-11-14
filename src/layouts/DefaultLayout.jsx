import { Outlet } from "react-router-dom"
import { NavLink, Link } from "react-router-dom"


export default function DefaultLayout() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to={'/'}>Homepage</NavLink>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                                <NavLink className="nav-link active" aria-current="page" to={'/ChiSiamo'}>Chi siamo</NavLink>
                            </div>
                            <div className="navbar-nav">
                                <NavLink className="nav-link active" aria-current="page" to={'/Prodotti'}>Prodotti</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Nuove offerte ogni settimana!!!</h1>
                        <p className="col-md-8 fs-4">
                            Scopri i nostri prodotti esclusivi a prezzi imbattibili. Non perdere l'occasione di fare affari incredibili! <br />
                            Ogni settimana, nuove offerte ti aspettano. Visita la nostra sezione Prodotti per saperne di più.
                        </p>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer className="py-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Quick links</h3>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/posts">Blog</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Company</h3>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/posts">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}