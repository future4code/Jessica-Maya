import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQGKaa0yhjm5sQ/profile-displayphoto-shrink_800_800/0/1591653921150?e=1636588800&v=beta&t=Btra1AFOi0LoPEvEn22n0QI7FwIb-PAmla4C1VeJfQU" 
          nome="Jéssica Bento Maya" 
          descricao="Oi seja bem vindo(a), aqui tem as minhas informações Profissionais e Escolares, tenho 25 anos de idade e sou de Arcos / Minas Gerais. Estou terminando meu curso superior de licenciatura em Pedagogia na faculdade Unopar e estou estudando FullStack na Escola Labenu. Pretendo ser Frontend Developer."
        />
        
        <ImagemButton 
          imagem="https://w7.pngwing.com/pngs/965/270/png-transparent-arrow-computer-icons-down-arrow-angle-triangle-black.png" 
          texto="Ver mais"
        />
      </div>

    <div className= "card-pequeno">
    <CardPequeno
      texto="Email:"
      descricao="bentojessica48@gmail.com"
      imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg" 
    />
    </div>

    <div className= "card-pequeno">
    <CardPequeno
      texto="Endereço:"
      descricao="Rua Centro"
      imagem="https://png.pngtree.com/png-clipart/20190520/original/pngtree-real-estate-house-map-icon-png-image_3568765.jpg" 
    />
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/1395/1395461.png" 
          nome="Halt Aminesia" 
          descricao="Auxiliar em Processos Logísticos, trabalhava e estudava pelo Senai em 2013." 
        />
        
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/1395/1395461.png" 
          nome="Ads Mineração " 
          descricao="Auxiliar Administrativo, trabalhava na balança com entrada e saidas de matérias e controle mensais com notas fiscais, contas a serem pagas e arquivamentos em 2019." 
        />

        <ImagemButton 
          imagem="https://w7.pngwing.com/pngs/965/270/png-transparent-arrow-computer-icons-down-arrow-angle-triangle-black.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Cursos</h2>
        <CardGrande 
          imagem="https://izabelapce.files.wordpress.com/2018/09/business-graduation-cap-icon.png" 
          nome="Senai" 
          descricao="Processos Logísticos - Concluido -  2013." 
        />
        
        <CardGrande 
          imagem="https://izabelapce.files.wordpress.com/2018/09/business-graduation-cap-icon.png" 
          nome="Labenu" 
          descricao=" FullStack - Em Conclusão - 2022. " 
        />

      <CardGrande 
          imagem="https://izabelapce.files.wordpress.com/2018/09/business-graduation-cap-icon.png" 
          nome="Unopar" 
          descricao=" Licenciatura em Pedagogia - Em Conclusão - 2022. " 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
