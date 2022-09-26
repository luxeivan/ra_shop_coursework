import React from 'react'

export default function ItemProduct({product}) {
    console.log(product)
    return (
        <div className="col-4">
            <div className="card catalog-item-card">
                <img src="./img/products/sandals_myer.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">{product.price} руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div>
            </div>
        </div>
    )
}
