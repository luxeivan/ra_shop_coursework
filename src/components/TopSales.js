import React, { useEffect } from 'react'
import ItemProduct from '../components/ItemProduct'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHits } from '../store/hitsSlice'

export default function TopSales() {
    const hits = useSelector((state) => state.hits)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHits())
    }, [])
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {hits.isLoading &&
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}
            <div className="row">
                {hits && hits.listHits.map(item => <ItemProduct product={item} key={item.id} />)}
            </div>
        </section>
    )
}
