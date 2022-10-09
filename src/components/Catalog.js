import React, { useEffect } from 'react'
import ItemProduct from '../components/ItemProduct'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, changeCategory } from '../store/productsSlice'
import { fetchCategories, changeActiveCategory } from '../store/categorySlice'

export default function Catalog(props) {
    const children = props.children
    const products = useSelector((state) => state.products)
    const categories = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        if(products.listProducts.length<6){

            dispatch(fetchProducts({}))
        }
        dispatch(fetchCategories())
    }, [])

    const handlerCategory = async event => {
        dispatch(changeCategory(event.target.dataset.category))
        dispatch(changeActiveCategory(event.target.dataset.category))
        dispatch(fetchProducts({}))
    }
    const handlerLoadMore = event => {
        dispatch(fetchProducts({ more: true }))
    }
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {children}
            <ul className="catalog-categories nav justify-content-center">
                {categories && categories.listCategories.map((item, index) => <li className="nav-item" key={index}>
                    <Link className={categories.activeCategory == item.id ? "nav-link active" : "nav-link"} to="/catalog/" onClick={handlerCategory} data-category={item.id}>{item.title}</Link>
                </li>)}
            </ul>
            <div className="row">
                {products && products.listProducts.map(item => <ItemProduct product={item} key={item.id} />)}
            </div>
            {products.isLoading &&
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}
            {!products.noMore && <div className="text-center">
                <button className="btn btn-outline-primary" onClick={handlerLoadMore} disabled={products.isLoading}>Загрузить ещё</button>
            </div>}


        </section>
    )
}
