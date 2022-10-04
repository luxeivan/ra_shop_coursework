import React from 'react'

export default function ItemProduct({product}) {
    return (
        <div className="col-4">
            <div className="card catalog-item-card">
                <img src={product.images[0]}
                    className="card-img-top img-fluid" alt={product.title} />
                <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price} руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div>
            </div>
        </div>
    )
}
