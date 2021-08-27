let nomes = ["maria", "pedro", "joao", "yara"]

nomes.sort(function(a, b) {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    return nomes

})
console.log(nomes)