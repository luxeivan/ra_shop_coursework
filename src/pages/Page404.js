import React from 'react'
import Banner from '../components/Banner'

export default function Page404() {
    return (
        <div>
            <Banner />
            <section className="top-sales">
                <h2 className="text-center">Страница не найдена</h2>
                <p>
                    Извините, такая страница не найдена!
                </p>
            </section>
        </div>
    )
}
