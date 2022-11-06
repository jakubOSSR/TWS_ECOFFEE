import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../LIB/client';

const Product = ({ produkt: {obrazok,nazov,kod,cena} }) => {
  return (
    <div>
        <Link href={`/produkt/${kod.current}`} >
            <div className="product-card">
              <img 
                src={urlFor(obrazok && obrazok[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <p className="product-name">{nazov}</p>
              <p className="product-price">{cena}€</p>
              
            </div>
        </Link>

    </div>
  )
}

export default Product