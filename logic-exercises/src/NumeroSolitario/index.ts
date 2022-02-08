let arr = [4,1,2,1,2]

let solitario = arr.filter((item, index, array) => {
    return array.indexOf(item) === index 
     
})
console.log(solitario)

