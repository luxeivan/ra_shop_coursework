import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeStringSearch, fetchProducts } from '../store/productsSlice'

export default function Search() {
    const [search, setSearch] = useState()
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const handlerChangeString = event => {

        console.log(event.target.value)
        setSearch(event.target.value)
        //dispatch(changeStringSearch(event.target.value))
    }
    const handlerSubmit = event => {
        event.preventDefault()
        dispatch(changeStringSearch(search))
        dispatch(fetchProducts({}))
        console.log(search)
    }
    return (
        <form className="catalog-search-form form-inline" onSubmit={handlerSubmit}>
            <input className="form-control" placeholder="Поиск" value={search} onChange={handlerChangeString} />
        </form>
    )
}
