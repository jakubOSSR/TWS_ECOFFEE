import React from 'react';
import Link from 'next/link';
import { urlFor } from '../LIB/client';

const FooterBanner = ( {footerBanner: {zlava,largeText1,largeText2,cas,
smallText,midText,produkt,buttonText,obrazok,desc}} ) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{zlava}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{cas}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/produkt/${produkt}`}>
              <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(obrazok)} className="footer-banner-image"
          />
      </div>
    </div>
  )
}

export default FooterBanner