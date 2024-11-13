import React from 'react'
import './Catalog.scss'

const Catalog = ({text}) => {
  return (
    <>
      <section className="catalog">
        <div className="container">
            <div className="catalog__wrap">
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Catalog
