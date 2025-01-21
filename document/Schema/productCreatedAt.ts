

export default {

 name: 'createdAt',
 title: 'Created At',
type: 'datetime',

initialValue: () => new Date().toISOString(),

  };