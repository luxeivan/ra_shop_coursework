import React from 'react'
import Banner from '../components/Banner'

export default function main() {
  return (
        <div className="row">
          <div className="col">
            <Banner/>
            <section className="top-sales">
              <h2 className="text-center">Хиты продаж!</h2>
              <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </section>
            <section className="catalog">
              <h2 className="text-center">Каталог</h2>
              <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </section>
          </div>
        </div>
  )
}
