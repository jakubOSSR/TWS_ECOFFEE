import React from 'react';
import Link from 'next/Link';
import { urlFor } from '../LIB/client';

const Clanok = ({ clanok: {obrazok,nazov,kod,autor,datum,desc,avatar} }) => {
  return (
    <div>
        <Link href={`/clanok/${kod.current}`} >
            <div className="blogItem-wrap">
              <img 
                className="blogItem-cover"
                src={urlFor(obrazok && obrazok[0])}/>
              <p className="blogItem-desc">{desc}</p>
              <h3>{nazov}</h3>
              <footer>
                <div className="blogItem-author">
                    <img src={urlFor(avatar)}/>
                    <div>
                        <h6>{autor}</h6>
                        <p>{datum}</p>
                    </div>
                </div>
              </footer>
            </div>
        </Link>

    </div>
  )
}

export default Clanok