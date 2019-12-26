// const add=function(a,b){
//     return a+b
// }
// console.log(add(3,1))


// const toAdd=[9,5]
// console.log(add(...toAdd))

// const groupA=['jen','cory']
// const groupB=['vikram']

// const final=[...groupB,3,...groupA]
// console.log(final)

const  person=['andrew','chiru']
const personTwo=['jen','pubg']
const total=[...person,...personTwo]

function greet(name,age){
    console.log('hi '+name+', you are '+age)
}
greet(...person)
greet(...personTwo)


// for(var i=0;i<2;i++){
//     console.log(total[i])
// }
total.forEach((name)=>{
    console.log('hi '+name)
})