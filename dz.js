//Задание 1.
const valuse = +prompt('Введите число', '')
if (typeof valuse !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(valuse)){
  alert('Ошибка, введено НЕ ЧИСЛО')
  } else if (valuse%2 !==0) {
  alert('Нечетное')
  } else {
    alert('Четное')}

//Задание 2.
let x;//указать любое значение

if (typeof x==='number'){
  alert("X is number")
} else if (typeof x==='string'){
    alert("X is string")
  } else if (typeof x==='boolean'){
    alert("X is Boolean")
    } else{
      alert("X is undefined")
    }

//Задание 3.
const str = 'Hello';
const reverse = str.split('').reverse().join('');
console.log(reverse);


//Задание 4.
const result = Math.floor(Math.random() * 100) + 1;
console.log(result)


//Задание 5.
let arr = [1, 2, 5, 2, 2, 3]
for (let i=0; i<arr.length-1; i++){
  console.log(arr[i])  
}


//Задание 6.
let arr = [1, 2, 5, 2, 2, 3]
for (let i=0; i<arr.length-1; i++){
        if(arr[i] == arr[i+1]) {
            console.log('true');
        } else {console.log('false');
     }
}

//Задание 7.

let arr = [1, 2, 5, 2, 2, 3];
let odd=0
let even=0
let result = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		odd++;
	} else {
		even++;
	}
});

console.log(odd);
console.log(even);

//Задание 8.
let flowers = new Map([
  ["rose", "pink"], 
  ["daffodil", "yellow"], 
  ["lily", "white"]
  ]);
  for (let [key,value] of flowers ) 
    console.log(`${key}: ${value}`);