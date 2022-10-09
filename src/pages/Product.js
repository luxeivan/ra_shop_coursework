import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Banner from '../components/Banner'
import { fetchProduct } from '../store/productSlice'
import { addCart } from '../store/cartSlice'

export default function Product() {
    const [count, setCount] = useState(1)
    const [size, setSize] = useState(null)
    const product = useSelector((state) => state.product)
    const id = useParams().id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])
    const currentProduct = product.currentProduct
    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    const increment = () => {
        if (count < 10) {
            setCount(prev => prev + 1)
        }
    }
    const handlerSize = (event) => {
        document.querySelectorAll('.catalog-item-size').forEach(item => item.classList.remove('selected'))
        event.target.classList.add('selected')
        setSize(event.target.dataset.size)

    }
    const handlerAddCart = () => {
        dispatch(addCart({
            id: id,
            title: currentProduct.title,
            size: size,
            count: count,
            price: currentProduct.price,
        }))
    }
    return (
        <>
            <Banner />
            {!product.isLoading && <section className="catalog-item">
                <Link to={`/catalog`} className="btn btn-outline-primary">🠔 В каталог</Link>
                <h2 className="text-center">{currentProduct.title}</h2>
                <div className="row">
                    <div className="col-5">
                        <img src={currentProduct.images[0]} className="img-fluid" alt={currentProduct.title} />
                    </div>
                    <div className="col-7">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Артикул</td>
                                    <td>{currentProduct.sku}</td>
                                </tr>
                                <tr>
                                    <td>Производитель</td>
                                    <td>{currentProduct.manufacturer}</td>
                                </tr>
                                <tr>
                                    <td>Цвет</td>
                                    <td>{currentProduct.color}</td>
                                </tr>
                                <tr>
                                    <td>Материалы</td>
                                    <td>{currentProduct.material}</td>
                                </tr>
                                <tr>
                                    <td>Сезон</td>
                                    <td>{currentProduct.season}</td>
                                </tr>
                                <tr>
                                    <td>Повод</td>
                                    <td>{currentProduct.reason}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center">
                            <p>Размеры в наличии:
                                {currentProduct.sizes.map((item, index) => {
                                    if (item.avalible) {
                                        return <span key={index} className="catalog-item-size" data-size={item.size} onClick={handlerSize}>{item.size}</span>
                                    }
                                }
                                )}
                            </p>
                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                <button className="btn btn-secondary" onClick={decrement}>-</button>
                                <span className="btn btn-outline-primary">{count}</span>
                                <button className="btn btn-secondary" onClick={increment}>+</button>
                            </span>
                            </p>
                        </div>
                        <button className="btn btn-danger btn-block btn-lg" disabled={size === null} onClick={handlerAddCart}>В корзину</button>
                    </div>
                </div>
            </section>}
            {product.isLoading &&
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}
        </>
    )
}
