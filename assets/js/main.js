'use strict';

//1
function numbers() {
    let a = +prompt('Введите число a', 3);
    let b = +prompt('Введите число b', 10);
        if(a<b){
            for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
                alert(i);
            }
        }
    }else{
        alert('Первое число должно быть меньше второго');
    }
  }
numbers();

//2
let i=0;
while(i<3){
    alert(`number ${i}!`);
    i++;
}

//3
let s = +prompt('Введите число больше 10', 12);
while(s<10){
    let s = +prompt('Попробуйте еще раз');
    if(s>10)break;
    if(!Number(s))break;
}

//4
function min(){
    let n = +prompt('Введите число');
    let m = +prompt('Введите число');
    if(m<n){
        alert(m);
    }else{
        alert(n);
    }
}
min();

//5
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}
  
  ask("Вы согласны?" ,
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );  

//6
// function checkAge(age) {
    // let itog = (age>18) ?  alert('true') : alert('Родители разрешили?'); 
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
// checkAge(13);  

// function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
//   }
//   checkAge(13);


let age = +prompt('Введите возраст');
let checkAge = age => age > 18 || confirm('Родители разрешили?');
checkAge(age)