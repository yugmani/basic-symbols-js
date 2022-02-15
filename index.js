// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JavaScript Symbolsr</h1>
<h4>See the output in Console</h4>`;

//WHAT IS A JAVASCRIPT SYMBOL?

//1. A Symbol is a primitive value, just like strings, numbers, booleans, undefined, and null. 
//2. And just like those other primitive values, a symbol itself is immutable. 
//3. But symbols are also like objects, in that they are created

//4. When you want to use a symbol, you instantiate a new one. This means that each time you create a symbol, you’re creating a new, immutable primitive value.

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo')

console.log(sym1 === Symbol());
console.log(sym2 === sym3);
//5. As you can see here, even symbols that look exactly the same are actually different pieces of data.

//6. Every time a symbol is created, you can imagine it has its own unique identifier that differentiates it from any other symbol.

//7. you can’t instantiate a symbol with the new operator like you would a function or a class. Just call Symbol() for instantiation.

// let newSymbol = new Symbol();
// output=> // TypeError: Symbol is not a constructor

//8. Symbols were introduced in ES2015,

//9. WHERE MIGHT THESE SYMBOLS BE USEFUL?

//10. One great place to use a symbol is as an object property.
//11. This allows you to set “secret” properties onto objects that can be accessed if need be, but will not alter the “shape” or business logic of that property.
//12. For instance, if you wanted some data that describes the object, but isn’t necessary when passing the object around to perform calculations, a symbol is a great choice.
let x = {}
let sym4 = Symbol('xoo');

x[sym4] = 'hidden';
x['string'] = 'not hidden';

console.log(x);

for(let key in x){
  console.log(x[key]);
}

