export default {
    name: 'produkt',
    title: 'Produkt',
    type: 'document',
    fields: [
      {
        name: 'obrazok',
        title: 'Obrázok',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'nazov',
        title: 'Názov',
        type: 'string',
      },
      { 
        name: 'kod',
        title: 'Kód',
        type: 'slug',
        options: {
          source: 'nazov',
          maxLength: 90,
        }
      },
      { 
        name: 'cena',
        title: 'Cena',
        type: 'number',
      },
      { 
        name: 'detaily',
        title: 'Detaily',
        type: 'string',
      }
    ]
  }