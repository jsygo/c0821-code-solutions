var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    totalPrice: 34.00,
    orderDate: 'August 4, 2020',
    deliveryDate: 'Aug 8, 2020',
    shipTo: 'JS Masher',
    directDelivery: false,
    orderItems: [
      {
        productName: 'JavaScript for impatient programmers',
        author: { firstName: 'Dr. Axel', lastName: 'Rauschmayer' },
        price: 31.55,
        support: false,
        review: false,
        returnDeadline: 'Sep 7, 2020'
      }
    ]
  },
  {
    orderNumber: '113-9984268-1280257',
    totalPrice: 44.53,
    orderDate: 'July 19, 2020',
    deliveryDate: 'Jul 20, 2020',
    shipTo: 'JS Masher',
    directDelivery: true,
    orderItems: [
      {
        productName: 'The Timeless Way of Building',
        author: { firstName: 'Christopher', lastName: 'Alexander' },
        price: 41.33,
        support: false,
        review: false,
        returnDeadline: 'Aug 19, 2020'
      }
    ]
  },
  {
    orderNumber: '114-2875557-9059409',
    totalPrice: 17.22,
    orderDate: 'July 4, 2020',
    deliveryDate: 'Jul 7, 2020',
    shipTo: 'JS Masher',
    directDelivery: true,
    orderItems: [
      {
        productName: 'Gamecube Controller Adapter',
        author: { firstName: null, lastName: null },
        price: 15.98,
        support: false,
        review: false,
        returnDeadline: 'Aug 5, 2020'
      }
    ]
  },
  {
    orderNumber: '113-2883177-2648248',
    totalPrice: 138.93,
    orderDate: 'July 3, 2020',
    deliveryDate: 'Jul 5, 2020',
    shipTo: 'JS Masher',
    directDelivery: false,
    orderItems: [
      {
        productName: 'GameCube Controller',
        author: { firstName: null, lastName: null },
        price: 94.95,
        support: true,
        review: false,
        returnDeadline: 'Aug 4, 2020'
      },
      {
        productName: 'The Art of Sql',
        author: { firstName: 'Stephane', lastName: 'Faroult' },
        price: 33.99,
        support: false,
        review: true,
        returnDeadline: 'Aug 4, 2020'
      }
    ]
  }
];

console.log('orderHistory:');
console.log('delivery date of 3rd most recent order:', orderHistory[2].deliveryDate);
console.log('price of the 2nd item of the 4th most recent order:', orderHistory[3].orderItems[1].price);
console.log('author of 1st item of the most recent order:', orderHistory[0].orderItems[0].author.lastName + ', ' + orderHistory[0].orderItems[0].author.firstName);
console.log('author of 1st item of the 3rd most recent order:', orderHistory[2].orderItems[0].author.lastName + ', ' + orderHistory[2].orderItems[0].author.firstName);
