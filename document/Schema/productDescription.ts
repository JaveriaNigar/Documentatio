

export default{

    name: 'description',
   title: 'Description',
   type: 'text',

   validation: Rule => Rule.required().max(300) 
   
   };