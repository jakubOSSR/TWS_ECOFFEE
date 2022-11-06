import React from 'react';

import {client} from '../LIB/client';
import {Product,FooterBanner,HeroBanner}
from '../components';

const Home = ({produkty,bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0] } />
     
      <div className="products-heading">
        <h2>Naša ponuka</h2>
        <p>Kávovary a kávy rôzneho druhu</p>
      </div>

      <div className="products-container">
        {produkty?.map((produkt) => <Product key={produkt._id} produkt={produkt}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "produkt"]';
  const produkty = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {produkty,bannerData}
  }
}
export default Home;
