// повторение
// var userLogin = "Gobov";
// var userPassword = "1234";
// var LoginImput = prompt("введите логин");
// var passwordImput = prompt("введите пароль");
// if(userLogin === LoginImput && userPassword === passwordImput){
//     alert("Авторизация прошда успешно, доступ разрешен!")
// }else{
//     alert("пользователь не найден, повторите попытку!")
// }





// var userINN = "20810200300758";
// var innFirstNumber =  Number(userINN[0])
// if((
//     innFirstNumber === 0 || innFirstNumber === 1 || innFirstNumber === 2 ) && userINN.length===14){
//     console.log("INN is valid");
// }else{
//     console.error("error")
// }

// var size = "m";
// var euSize = 0;
// if(size === "s" || size === "S" ){
//     console.log("Европейский размер s - ", euSize = 36)
// }else if(size === "m"){
//     console.log("Европейский размер m - ", euSize = 40)
// }else if(size === "l"){
//     console.log("Европейский размер l - ", euSize = 42)
// }else{
//     console.log("не верно")
// }






// // switch..case
// switch(size){
//     case "S":
//         case "s":
//         console.log("small")
//         break;
//         case "M":
//             case "m":
//         console.log("medium")
//         break;
//         case "L":
//             case "l":
//             console.log("large")
//             break;    
//             default:
//                 console.log("uknow size")
// }


//NaN - not a number не число
console.log(typeof NaN)

//4) underfined - неопределенный тип данных
let name;
console.log(name)
//5) null- нулевой тип данных
var name2 = null
console.log(name2)
//6) object - обьект или комплексный тип данных
var user = {
    name: "Vadim",
    surname: "Gobov",
    number: 996007252525,
    phoneNumber: null,
    isMarried: false,
    age: undefined,
    laptop:{
        model:"macbook",
        cheap: "m1",
        mous: false
    },
    profession:{}
    // name: "Vadim"
}

console.log(typeof user)
console.log(user.laptop.cheap)
console.log(user.isMarried, user.phoneNumber)
console.log(user.name);

/*
* 3 класса (вида) операторов:
* 1) унарные операторы - + (из строки в число), !(лог-ое не), - (из полож. числа превращается в отриц.)
* 2)бинарные операторы - &&, ||, + (прибавление)
* 3)тернарные операторы
* */

// true - white, false-black
var playerColor = true;
console.log(playerColor ? "You start..." : "Wait your enemy")

var man0rWomen = "true"
if(man0rWomen === true){
    console.log('Дорогой');
   }   else if (man0rWomen === false){
    console.log('Дорогая');
   }else{
    console.log('оно')
   }

   //код выше с помощью тернарных операторов
var operation = man0rWomen ? "Дорогой" : "Дорогая"
console.log(operation)
