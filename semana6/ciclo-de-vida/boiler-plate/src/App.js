import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
        id:1,
        texto: 'Tarefa 1',
        completa: false,
      },
      
      {
        id: 2,
        texto: 'Tarefa 2',
        completa: true
      }
    ],
      inputValue: '',
      filtro: ''
    }

    handleText = (event) => {
      this.setState({ tarefas: event.target.value });
    };

    saveInLocalStorage = () => {
      
      const blocosTarefas = this.state.tarefas;
      const textString = JSON.stringify(blocosTarefas);
      window.localStorage.setItem("blocosTarefas", textString);
      
    };

    getFromLocalStorage = () => {
      const textString = window.localStorage.getItem("blocosTarefas");
      if (textString) {
        const text = JSON.parse(textString);
        this.setState({ tarefas: text });
        console.log(textString)
      }
    };

  componentDidUpdate() {
    this.saveInLocalStorage();
    
  };

  componentDidMount() {
    this.getFromLocalStorage();
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novasTarefas= {
        
        id:Date.now(),
        texto: this.state.inputValue,
        completa: false,
    }
    const novaListaDeTarefas = [...this.state.tarefas, novasTarefas]
     this.setState({tarefas: novaListaDeTarefas, inputValue: ""})
  }  
    

  selectTarefa = (id) => {
    const novaTarefa = this.state.tarefas.map((tarefaQEstaoOuNaoPendentes)=>{
          
       if(id === tarefaQEstaoOuNaoPendentes.id){
       
         const tarefaNova ={
           ...tarefaQEstaoOuNaoPendentes,
           completa: !tarefaQEstaoOuNaoPendentes.completa
         }
         
         return tarefaNova

       }else{
         return tarefaQEstaoOuNaoPendentes
       }
      
    })
    this.setState({tarefas: novaTarefa})
  }
   

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
