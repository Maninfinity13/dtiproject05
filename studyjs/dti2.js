// Array คือ Data Structure ที่ประกอบด้วยข้อมูลหลายๆข้อมูล ข้้อมูลที่เป็นข้อมูลประเภทเดียวกัน

// Array เอามาใช่กับ ภาษาโปรแกรมในเรื่องของ Variable (ตัวแปร)

// ตัวแปร (Variable ) มีหน้าที่การเก็บข้อมูลตัวแปรไหใช้งาน คือ กำหนดค่าให้มันใหม่ หรือเอาค่าที่มันเก็บมาใช้

let x = 10
const Y = 20 
let data1 = [10, 20, 30, 10, 40]
let data2 = ['hi ', 'hey', 'hoo']

console.log(x)
x = 100
console.log(x)
console.log(Y)
// Y = 200 error เพราะเป็น const คือค่าคงที่เป็นค่าที่ห้ามเปลี่ยน
console.log(data1[2])
console.log(data2[2])
data2[1] = 'hello'
console.log(data2[1])
console.log(data2)
data2.push('WOW')
console.log(data2)
data2.pop()
data2.pop()
console.log(data2)
// --------------------------
let data3 = [10,20,'AAA',50.55] 
console.log(`Data 3 มีทั้งหมด ${data3.length}`)
console.log(data3[2])