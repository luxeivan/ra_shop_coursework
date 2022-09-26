import React from 'react'
import Banner from '../components/Banner'
import ItemProduct from '../components/ItemProduct'
import { Link } from 'react-router-dom'

export default function Catalog() {
    return (
        <div>
            <Banner />
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <form className="catalog-search-form form-inline">
                    <input className="form-control" placeholder="Поиск" />
                </form>
                <ul className="catalog-categories nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog/1">Все</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog/2">Женская обувь</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog/3">Мужская обувь</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog/4">Обувь унисекс</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog/5">Детская обувь</Link>
                    </li>
                </ul>
                <div className="row">
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                <ItemProduct/>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary">Загрузить ещё</button>
                </div>
            </section>
        </div>
    )
}
