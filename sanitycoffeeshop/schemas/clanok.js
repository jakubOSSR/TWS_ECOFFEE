export default {
    name: 'clanok',
    title: 'Článok',
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
        name: 'autor',
        title: 'Author',
        type: 'string',
      },
      { 
        name: 'nadpis1',
        title: 'Nadpis1',
        type: 'string',
      },
      { 
        name: 'text1',
        title: 'Text1',
        type: 'string',
      },
      { 
        name: 'nadpis2',
        title: 'Nadpis2',
        type: 'string',
      },
      { 
        name: 'text2',
        title: 'Text2',
        type: 'string',
      },
      { 
        name: 'nadpis3',
        title: 'Nadpis3',
        type: 'string',
      },
      { 
        name: 'text3',
        title: 'Text3',
        type: 'string',
      },
      { 
        name: 'desc',
        title: 'Description',
        type: 'string',
      },
      { 
        name: 'datum',
        title: 'Datum',
        type: 'string',
      },
      { 
        name: 'avatar',
        title: 'Avatár',
        type: 'image',
        options: {
          hotspot: true,
        }
      }
      
    ]
  }