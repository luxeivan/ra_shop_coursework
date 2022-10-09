import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeStringSearch, fetchProducts } from '../store/productsSlice'

export default function Search() {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const handlerChangeString = event => {
        dispatch(changeStringSearch(event.target.value))
    }
    const handlerSubmit = event => {
        event.preventDefault()
        dispatch(fetchProducts({}))
    }
    return (
        <form className="catalog-search-form form-inline" onSubmit={handlerSubmit}>
            <input className="form-control" placeholder="Поиск" value={products.stringSearch} onChange={handlerChangeString} />
        </form>
    )
}
