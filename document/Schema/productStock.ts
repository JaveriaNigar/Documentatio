

export default  {
    name: 'stock',
    title: 'Stock',
    type: 'number',
    validation: Rule => Rule.required().min(0), 
   };