// nested if-else

// let a = 10
// let b = 0
// let c = 30 
// if(a==10){
//     if(b>=15){
//        if(c<=50){
//         console.log('All conditions are true')
//        }
//        else{
//         console.log('third condit. false')
//        }
//     }
//     else{
//         console.log('second condi.false')
//     }
// }
// else{
//    console.log('first condition is false')
// }

// random value 

// let a = Math.PI 
// console.log(a)

// let b = 5.4655464845
// b = Math.round(b)
// console.log(b)

// let rand_value = Math.random() //btw 0 and 1
// console.log(rand_value)

// let rand_value1 = Math.random()*6 // 0&6
// rand_value1 = Math.round(rand_value1)
// console.log(rand_value1)

// let m = 6.99999999
// console.log(Math.floor(m))
// let n = 6.9999999
// console.log(Math.ceil(m))




let usr_slctn;
let selection = ['rock','paper','scissors']
let us = document.getElementById('p1')
let cs = document.getElementById('p2')

function start(value){
    usr_slctn = value;
    // console.log(user_selection)
    us.textContent = `user selection : ${usr_slctn}`
    let rand_val = Math.random()*3
    rand_val = Math.floor(rand_val)
    let cs_slctn = selection[rand_val]
    // console.log(rand_val)
    // console.log(computer_selection)
    cs.textContent = `computer selection : ${cs_slctn}`
}
  

