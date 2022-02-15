// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JavaScript Symbolsr</h1>
<h4>See the output in Console</h4>`;

// ****************************************
//WHAT IS A JAVASCRIPT SYMBOL?
// ****************************************

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

//8. Symbols were introduced in ES2015

// ****************************************
//9. WHERE MIGHT THESE SYMBOLS BE USEFUL?
// ****************************************

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

// ****************************************
// 13. Another good use for symbols is big sets of data.
// ****************************************

//14. For instance, if you’re creating a lot of key-value pairs on an object, it may be hard to find unique names for each individual key.

//15. Since every symbol is unique, if you set the keys with symbols, you don’t ever have to worry about replacing data instead of adding it.

// ****************************************
// 16. another variation of the JavaScript symbol
// ****************************************

// 17. We can also create global symbols that can be accessed throughout your entire codebase. These global symbols are different, in that they are not all unique instances of a symbol, but are unique to the key arguments passed in to them.
// 18. When you call Symbol.for(“description”), you are either returned the pre-existing global symbol, or the new symbol if it hasn’t been created yet.

//19. You can also call Symbol.keyFor(symbol), where you pass in a symbol. If that symbol exists globally, you will be returned its “key” or “description”, otherwise you’re just returned undefined.

let symbol1 = Symbol.for()
let symbol2 = Symbol.for('undefined');
let symbol3 = Symbol.for('foo');
let symbol4 = Symbol.for('foo');

console.log(symbol1);
console.log(symbol1 === symbol2);
console.log(symbol3 === symbol4);

console.log(Symbol.keyFor(symbol3));
console.log(Symbol.keyFor(symbol3) === symbol4.description);