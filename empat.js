data = [
  {
    title: 'Hunger Games',
    isBorrowed: true,
  },
  {
    title: 'Harry Potter',
    isBorrowed: true,
  },
  {
    title: 'Assassins Creed',
    isBorrowed: true,
  },
  {
    title: 'Percy Jackson',
    isBorrowed: true,
  },
  {
    title: 'Fifty Shades of Grey',
    isBorrowed: false,
  },
];

// NO 4A
let obj = data.find(o => o.title === 'Fifty Shades of Grey');

console.log(obj);

 // NO 4B
const bukuada = data.filter(function(pinjem) {
   
    if(pinjem.isBorrowed == true ) {
      return true // simpan data!
    }
  })
  
  console.table(bukuada)