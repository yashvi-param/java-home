console.log(1 == "1")
console.log(1 === "1")

console.log("false" == false)

console.log("-----------------")

let obj1 = {name : "krisha"}
let obj2 = {name : "krisha"}

let arr1 = []
let arr2 = []

console.log({} == {})
console.log(obj1 == obj2)
console.log(obj1.name == obj2.name)
console.log([] == [])




function fun(num){
    return num
}

let udf1 = fun;
let udf2 = fun

console.log(udf1(5))
console.log(udf2(10))


(function calling(){
    console.log("calling iife")
})()