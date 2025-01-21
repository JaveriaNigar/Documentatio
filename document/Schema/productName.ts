

export default  { 
    name: 'product',
     title: 'Product', 
    type: 'document',
 
    fields: [
     {
     name: 'name',
     title: 'Product Name',
     type: 'string',
     validation: Rule => Rule.required().min(3).max(50) 
    },
      ],
     };
    
