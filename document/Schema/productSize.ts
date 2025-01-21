

export default  
{
name: 'sizes', 
title: 'Sizes',
type: 'array',
of: [{ type: 'string' }],
options: {
list: [
{ title: 'Small', value: 'S' },
{ title: 'Medium', value: 'M' }, 
{ title: 'Large', value: 'L' },
{ title: 'Extra Large', value: 'XL' },
], 
},
validation: Rule => Rule.required().min(1)
};