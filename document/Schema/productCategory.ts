

export default {
    name: 'category',
     title: 'Category',
     type: 'string', 
    options: { 
    list: [ 
    { title: 'Korean Style', value: 'korean-style' }, 
    { title: 'Western Clothes', value: 'western-clothes' },
     { title: 'Old Money Fashion', value: 'old-money-fashion' }, 
    ], 
    },
    validation: Rule => Rule.required() 
    }