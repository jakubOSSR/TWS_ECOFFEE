import React from 'react'
import Link from 'next/Link'

import {urlFor} from '../LIB/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="coffee-product">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.obrazok)} alt="coffee" className="hero-banner-image" />

        <div>
        <Link href={`/produkt/${heroBanner.produkt}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>

          <div className="desc">
            <h5>Popis</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner