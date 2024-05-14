// for (let x = 1; x <= 20; x ++){
//     if(x % 2 == 1){
//         console.log(x);
//     }
// }







// let sum = 0;

// for (let i = 1; i <= 20; i += 2){
//    sum += i
// }
// console.log(sum);


function(){
    let amount = prompt("Enter amount")
    let from = prompt("from what currency?")
    let to = prompt("to what currency")

    if(from == "dollar" && to == "naira"){
        alert(amount / 1000);
    }else if(from == "naira" && to == "dollar"){
        alert(amount * 1000)
    }

}

test()