import React from 'react'
import {client,urlFor} from '../../LIB/client';
import { AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar } from 'react-icons/ai';
import {Product} from '../../components';
import {useStateContext} from '../../context/StateContext';

const  ProductDetails = ({ produkt,produkty }) => {
  const { obrazok,nazov,detaily,cena } = produkt;
  const { decQty,incQty,qty,onAdd } = useStateContext();

  return (
    <div>
        <div className="product-detail-container">
            <div>
              <div className="image-container">
                  <img src={urlFor(obrazok && obrazok[0])} />
              </div>
            </div>
            <div className="product-detail-desc">
              <h1>{nazov}</h1>
              <div className="reviews">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
                <p>(20)</p>
                <h4>Popis: </h4>
                <p>{detaily}</p>
                <p className="price">{cena}€</p>
                <div className="quantity">
                  <h3>Počet kusov:</h3>
                  <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus/></span>
                    <span className="num" onClick="">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus/></span>
                  </p>
                </div>
                <div className="buttons">
                  <button type="button" className="add-to-cart" 
                  onClick={() => onAdd(produkt,qty)}>Pridať do košíka</button>
                  <button type="button" className="buy-now">Kúpiť teraz</button>
                </div>
              </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>Najpredávanejší tovar </h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {produkty.map((item) => (
                <Product key={item._id}
                 produkt ={item} />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "produkt"] {
    kod {
      current
    }
  }
  `;

  const produkty = await client.fetch(query);

  const paths = produkty.map((produkt) => ({
    params: { 
      kod: produkt.kod.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { kod }}) => {
  const query = `*[_type == "produkt" && kod.current == '${kod}'][0]`;
  const produktyQuery = '*[_type == "produkt"]'
  
  const produkt = await client.fetch(query);
  const produkty = await client.fetch(produktyQuery);

  console.log(produkt);

  return {
    props: { produkty, produkt }
  }
}

    export default ProductDetails