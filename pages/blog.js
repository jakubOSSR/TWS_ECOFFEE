import React from 'react';
import {client} from '../LIB/client';
import {Clanok} from '../components';
import { urlFor } from '../LIB/client';

const blog = ({clanky}) => {
  
  return (
    <div>   
      <header className="home-header">
        <h2> Všetko o káve</h2>
        <h1>
          <span>“</span> Blog <span>”</span>
        </h1>
        <p>
          jediné miesto, kde sa o káve dozviete najviac, <br/> zaujímavé články zo sveta kávy.
        </p>
      </header>

      <div className="blogList-wrap">
        {clanky?.map((clanok) => <Clanok key={clanok._id} clanok={clanok}/>)}
      </div>

    </div> 
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "clanok"]';
  const clanky = await client.fetch(query);

  return {
    props: {clanky}
  }
}

export default blog