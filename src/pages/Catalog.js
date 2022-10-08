import React from 'react'
import Banner from '../components/Banner'
import Catalog from '../components/Catalog'
import Search from '../components/Search'


export default function CatalogPage() {
    
    return (
        <div>
            <Banner />
            <Catalog>
              <Search/>
            </Catalog>
        </div>
    )
}
