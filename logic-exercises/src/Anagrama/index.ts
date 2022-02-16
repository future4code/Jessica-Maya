const isAnagrama = (frase1: string, frase2: string) => {
	return frase1.split("").sort().join("") === frase2.split("").sort().join("")
}
console.log(isAnagrama("anagrama", "nagarama"))
console.log(isAnagrama("gato", "tago"))
console.log(isAnagrama("gato", "rato"))