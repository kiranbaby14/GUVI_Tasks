let arr = ['kiran', 'baby', 'guvi'];
let cap = arr.map(letter => letter[0].toUpperCase() + letter.slice(1).toLowerCase())
console.log(cap);

/*----------OUTPUT-------------

[ 'Kiran', 'Baby', 'Guvi' ]

*/
