const indexOf = (
     source: string,
     query: string,
     mainIndex: number = 0,
     sourceIndex: number = 0,
     queryIndex: number = 0
): number =>  {
    

    if(sourceIndex > source.length) {
        console.log("Caiu nesse log 1")
        return -1
    }

    if(queryIndex >= query.length) {
        console.log("Caiu nesse log 2")
        return  mainIndex
    }

    if(source[sourceIndex] === query[queryIndex]) {
        console.log("Caiu nesse log 3")
        return indexOf(source, query, mainIndex, sourceIndex + 1, queryIndex + 1)
    } else {
        console.log("Caiu nesse log 4")
        return indexOf(source, query, mainIndex + 1, mainIndex + 1, 0)
    }
}
console.log(indexOf("({})", ")"))
console.log(indexOf("-^>", ">"))