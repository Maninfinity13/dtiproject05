console.log("SAU...");
//ประกาศตัวแปร var let const
// Block scope {....}
// Operator

// Control Flow ->
// if, if-else, if-else-if, switch
// While, do-while, for

// function ****
// no parameter/no returns
// have parametter/no return
// no parameter/has return
// have parameter/has return

// expression function / anonymosu function
// function -> default parameter

function funcA() {
  console.log("A.....");
}

function funcB(x, y) {
  console.log(x);
  console.log(y);
}
funcA();
funcB(10, 20);

function funcC() {
  console.log("C....");
  return "HI.....";
}

function funcD(x, y) {
  return x + y;
}

console.log(funcC());
let wow = funcD(100, 200);

// ----------------------------------
function funcE(a, b, c = 100) {
  console.log(a + b + c);
}

function funcF(x='Hi', y=100, z='Wow Wow Wow'){
    return x + y + z
}

funcE(10,20) //-> 130
funcE(10,20,3) // -> 60
console.log(funcF('Hello'))
// -----------------------------------------------------------
console.log(10 + 10 +'10')
console.log(10 + 10 + 10)

let info1 = 100
let info2 = 200

console.log(info1 + '+' + info2 + '=' + (info1+info2))
// ปกติ String -> '????' , "????????"
// `???` backtick เป็น String - กด Alt+9+6
console.log(`${info1} + ${info2} = ${info1+info2}`)
// -----------------------------------------------------------
// Operator -> Ternary Operator
// เหมือนเป็น Short hand ของ Control Flow กลุ่ม if, if-else, if-else,if

console.log(10 > 200 ? 'Hi....' : 'Hey....')
let x = 'Bangna'
let y = 'Bangpoo'
z = x > y ? 'Wow...' : 'Woo....'
console.log(z) //
console.log(x > y) 
console.log(x == y) 
console.log(x < y ) 

