const BigPrefix = (frase: string[]) => {
    if(frase.length === 0) {

        return ""
    }

    let prefix = ""

    for(let f = 0; f < frase[0].length; f++) {
        let chars = frase[0][f]
        let allChars = true
        
        for(let i = 0; i < frase.length; i++) {
            if(frase[i][f] !== chars ) {
                return prefix 
            }
        }
        
        if(chars) {
            prefix += chars
        }
    }
    
    return prefix
}
console.log(BigPrefix(["flower","flow","flight"]))
console.log(BigPrefix(["dog","racecar","car"]))
console.log(BigPrefix(["coracao","cor","corona","coreia"]))