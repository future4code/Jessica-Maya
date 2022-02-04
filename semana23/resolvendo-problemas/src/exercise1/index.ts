const isOneEdit = (frase1: string, frase2: string): boolean => {

        if(Math.abs(frase2.length - frase1.length) > 1){
            console.log("passou no primeiro if")
            return false
        }

        if(frase1.length > frase2.length) {
            console.log("passou no segundo if")
            return frase1.includes(frase2)
        }

        if(frase2.length > frase1.length) {
            console.log("passou no terceiro if")
            return frase2.includes(frase1)
        }

        let differentialCharacterCount = 0

        for(let i = 0; i < frase1.length; i++) {
            if(frase1[i] !== frase2[i]) {
                console.log(differentialCharacterCount++)
                 differentialCharacterCount++
            } 
        }

        return differentialCharacterCount === 1

}


console.log(isOneEdit("Labenu", "Labenu"))