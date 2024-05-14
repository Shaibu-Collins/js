// let a = document.getElementById("first")
// let a = document.getElementsByClassName('first')
// let a = document.getElementsByTagName("h1")
// let a = document.querySelectorAll("#first")
// let a = document.body.children

// function selEle(){

//     let a = document.head.children




// console.log(a);
// }

// function (){
//     let amount = prompt("Enter amount")
//     let from = prompt("from what currency?")
//     let to = prompt("to what currency")

//     if(from == "dollar" && to == "naira"){
//         alert(amount / 1000);
//     }else if(from == "naira" && to == "dollar"){
//         alert(amount * 1000)
//     }

// }

// test()

function test() {
    let amount = prompt("Enter amount")
    let from = prompt("from what currency?")
    let to = prompt("to  what currency")

    if (from == "dollar" && to == "naira") {
        alert(amount * 1000);

    } else if (from == "naira" && to == "dollar") {
        alert(from / 1000)
    }

}
test()