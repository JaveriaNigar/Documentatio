

export default {
    
    name: 'price', 
  title: 'Price',
  type: 'number',

  validation: Rule => Rule.required().positive()

  }; 