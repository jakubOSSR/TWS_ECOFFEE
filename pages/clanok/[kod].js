import React from 'react'
import {client,urlFor} from '../../LIB/client';
import {Clanok} from '../../components';
import Link from 'next/Link';

const  ClanokDetails = ({ clanok,clanky }) => {
    const { obrazok,nazov,autor,avatar, text1, text2, text3, nadpis2, nadpis3,datum } = clanok;  
    return (
      <div>
        <div className="blog-wrap">
            <header>
                <p className="blog-date">Publikované {datum}</p>
                <h1>{nazov}</h1>
            </header>
            <img src={urlFor(obrazok && obrazok[0])} />
            <p className="blog-desc">{text1}</p>
            <h3 className="blog-desc">{nadpis2}</h3>
            <p className="blog-desc">{text2}</p>
            <h3 className="blog-desc">{nadpis3}</h3>
            <p className="blog-desc">{text3}</p>
            <footer>
                <div className="blogItem-author">
                    <img src={urlFor(avatar)}/>
                    <div>
                        <h6>{autor}</h6>
                    </div>
                </div>
              </footer>
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
  
    const clanky = await client.fetch(query);
  
    const paths = clanky.map((clanok) => ({
      params: { 
        kod: clanok.kod.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: { kod }}) => {
    const query = `*[_type == "clanok" && kod.current == '${kod}'][0]`;
    
    
    const clanok = await client.fetch(query);
    
  
    console.log(clanok);
  
    return {
      props: {clanok }
    }
  }
  
      export default ClanokDetails