import './App.css';
import Titulo from './components/Titulo';
import { useState } from 'react';
import { Botao, DivTasks, Input,Task } from './styles/styles';
function App() {
  const [tarefas,setTarefas] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTarefa=()=>{
    let newTarefa = newTask;
    setTarefas([...tarefas, newTarefa])
    setNewTask('');
  }

  return (
    <>
      <Titulo/>
      <DivTasks>
        <Input
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
          />
        <Botao onClick={addTarefa}>Cadastrar</Botao>
      </DivTasks>
      <div>
        {
          tarefas.map(t=><Task key={t}> {t} </Task>)
        }
      </div>
    </>
  );
}

export default App;
