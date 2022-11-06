
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import produkt from './produkt';
import banner from './banner';
import clanok from './clanok';

export default createSchema({
  
  name: 'default',
 
  types: schemaTypes.concat([produkt,banner,clanok]),
})
