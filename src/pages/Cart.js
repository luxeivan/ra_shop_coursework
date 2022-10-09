import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delCart } from '../store/cartSlice'

export default function Cart() {
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()
  console.log(cart)
  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {cart.listCart.map((item, index) =>
              <tr key={index + 1}>
                <td scope="row">{index + 1}</td>
                <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                <td>{item.size}</td>
                <td>{item.count}</td>
                <td>{item.price} руб.</td>
                <td>{item.price * item.count} руб.</td>
                <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
              </tr>
            )}
            <tr>
              <td colSpan="5" className="text-right">Общая стоимость:</td>
              <td colSpan="2">{cart.listCart.reduce((sum, curr) => sum + curr.price * curr.count, 0)} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card card-cart">
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input className="form-control" id="phone" placeholder="Ваш телефон" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input className="form-control" id="address" placeholder="Адрес доставки" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="agreement" />
              <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
          </form>
        </div>
      </section>
    </>
  )
}
