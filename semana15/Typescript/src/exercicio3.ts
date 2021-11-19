// Exercicio 3

type UserPost = {
    autor: string,
    texto: string
}


const posts: UserPost[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(
    posts: UserPost[],
     autorInformado?: string
     ) : UserPost[] {
         if(autorInformado === undefined){
             return posts
         }

            return posts.filter(
                (post) => {
                return post.autor === autorInformado
      }
    )
  }

    console.log("---------------------------------------------")
    console.log(buscarPostsPorAutor(posts, "Lord Voldemort"))
    console.log("---------------------------------------------")
    console.log(buscarPostsPorAutor(posts, "Dobby"))
    console.log("---------------------------------------------")