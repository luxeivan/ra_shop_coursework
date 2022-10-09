import React, { useState } from 'react'
import { Link, useNavigate, NavLink, Nav } from 'react-router-dom'
import headerLogo from '../img/header-logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeStringSearch, fetchProducts } from '../store/productsSlice'

export default function Header() {
  const [statusButton, setStatusButton] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handlerSubmit = (event = null) => {
    event && event.preventDefault()
    setStatusButton(false)
    const searchText = document.getElementById('search-input').value
    if(searchText.length>0){
      dispatch(changeStringSearch(searchText))
      dispatch(fetchProducts({}))
      navigate("/catalog")
    }
  }

  const handlerButtonSearch = event => {
    setStatusButton(true)
    if (statusButton) {
      handlerSubmit()
    }
  }
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand" >
              <img src={headerLogo} alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">О магазине</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handlerButtonSearch}></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                {statusButton && 
                <form data-id="search-form" id="search-form" className="header-controls-search-form form-inline" onSubmit={handlerSubmit}>
                  <input className="form-control" id="search-input" placeholder="Поиск" autoFocus/>
                </form>
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
