import React from 'react'
import { FilterComponent } from './filter'
import { Card } from './cards'
import { Footer } from '../footer'

export const Shop = () => {
  return (
    <div className='mt-16 '>
      <FilterComponent />
      <Card />
      <Footer />
    </div>
  )
}