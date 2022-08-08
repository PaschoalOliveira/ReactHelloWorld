import React from 'react'

export default function Todo({tarefa,modificarTarefa} : any,) {
 
    function modificarCheckBox(){
        modificarTarefa(tarefa.id)
    }
return (
    <div>
        <label>
            <input type="checkbox" checked={tarefa.feito} onChange={modificarCheckBox}></input>
            {tarefa.nome}
        </label>
    </div>
  )
}
