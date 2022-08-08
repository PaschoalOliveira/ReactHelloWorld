import React from 'react'
import Todo from './Todo'

export default function TodoList( {lista,modificarTarefa} :any,) {
  
  return (
    lista?.map((tarefa: any) => {
        return <Todo key={tarefa.id} tarefa={tarefa} modificarTarefa={modificarTarefa}></Todo>
   })
  )
}
