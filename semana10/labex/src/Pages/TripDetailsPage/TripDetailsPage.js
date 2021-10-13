import {ContainerText, } from "./styled"

const TripDetailsPage =() =>{
    return (
        <div>
            <ContainerText>Viagem a Marte</ContainerText>
            <div>
            <p><strong>Nome:</strong> Piquinique com os Astronautas</p>
           <p><strong>Descrição:</strong>Uma Viagem inesquecivel ao outro planeta cheio de novidades.</p>
           <p><strong>Planeta:</strong>Marte</p>
           <p><strong>Duração:</strong> 200 dias</p>
           <p><strong>Data:</strong>20/20/20</p>
           </div>
           <ContainerText>Condidatos Pendentes</ContainerText>
           <div>
           <p><strong>Nome:</strong> Lala</p>
           <p><strong>Profissão:</strong>Estudante</p>
           <p><strong>Idade:</strong>21 anos</p>
           <p><strong>Texto de Candidatura:</strong> blablalbalb alballba</p>
               <div>
               <button>Aprovar</button>
               <button>Reprovar</button>
               </div>
           </div>
           <ContainerText>Candidatos Aprovados</ContainerText>
           <div>1. Lulu
                2. Lili
                3. Lolo
           </div>
        </div>
    )
}
export default TripDetailsPage