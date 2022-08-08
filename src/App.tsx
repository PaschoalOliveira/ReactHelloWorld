import React, { useState} from 'react';
import './App.css';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

function App() {

  /*
  [
    { id:1,
      nome:'Estudar Javascript',
      feito:false
    },
    { id:2,
      nome:'Assistir Better Call Saul',
      feito:false
    }, 
    ]
  */
  const [tarefas, setTarefas] = useState<any[]>([])
  const [nomeDigitado, setNomeDigitado] = useState('')

  function adicionarTarefa(event : any){
    console.log(nomeDigitado);
    let id = uuidv4();
    
    let novaTarefa = { id,
      nome:nomeDigitado,
      feito:false
    }
    setTarefas(listaAtual => {
      return [...listaAtual, novaTarefa]
    })
    
    setNomeDigitado('')
  }

  function modificarTarefa(id) {
    const novasTarefas = [...tarefas]
    const tarefa = novasTarefas.find(todo => todo.id === id)
    if(tarefa.feito == true){
      tarefa.feito = false;
    }else if(tarefa.feito == false){
      tarefa.feito = true;
    }
    setTarefas(novasTarefas)
  }

  function limparTarefas(event : any){
    setTarefas(listaAtual => {
      return []
    })
  }

  return (  
    <>
    <TodoList lista={tarefas} modificarTarefa={modificarTarefa}></TodoList>
    <input type="text" value={nomeDigitado} onChange={e => {setNomeDigitado(e.target.value)}}></input>
    <input type="button" onClick={adicionarTarefa} value="Adicionar TODO"></input>
    <input type="button" onClick={limparTarefas} value="Limpar Todos"></input>
    <div>{tarefas.filter(tarefa => tarefa.feito == false).length} Tarefas a fazer</div>
    </>
  );
}

export default App;
