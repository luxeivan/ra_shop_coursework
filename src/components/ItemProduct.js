import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemProduct({product}) {
    return (
        <div className="col-4">
            <div className="card catalog-item-card">
                <img src={product.images[0]}
                    className="card-img-top img-fluid" alt={product.title} />
                <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price} руб.</p>
                    <Link to={`/catalog/${product.id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}
