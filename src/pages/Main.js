import React from 'react'
import Banner from '../components/Banner'
import Catalog from '../components/Catalog'

import TopSales from '../components/TopSales'

export default function main() {
  return (
        <div className="row">
          <div className="col">
            <Banner/>
            <TopSales/>
            <Catalog/>
          </div>
        </div>
  )
}
