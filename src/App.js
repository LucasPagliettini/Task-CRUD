import React, { useState } from 'react';
import Formulario from './components/Formulario';
import ListadoTareas from './components/ListadoTareas';


function App() {

  const data = localStorage.getItem('localTaskList');
  const localTaskList = data!==null ? JSON.parse(data) : [];

  const[selectedTask, setSelectedTask] = useState({});
  const[taskList, setTaskList] = useState(localTaskList);
  const[editing, setEditing] = useState(false);

  const updatetaskList = (list) => {
    localStorage.setItem('localTaskList', JSON.stringify(list));
    setTaskList(list);
  }
  const deleteTag = (id) => {
    const listado=taskList.filter(iter => iter.id!==id)
    updatetaskList(listado);
  }

  const addTask =(task) => {
    let id;
    let lastPosition = taskList.length - 1;
    lastPosition > -1 ? id=taskList[lastPosition].id + 1 : id=0;
    let tarea={id:id, task:task};
    const listado = [...taskList, tarea]
    updatetaskList(listado);
  }


  const edit = (id) => {
    const selectedItem = taskList.filter(task => task.id===id)
    setSelectedTask(selectedItem[0])
    setEditing(true);
  }

  const update = (task) => {
    const updatingTask={id:selectedTask.id, task:task.task}
    const listado=taskList.map(iter => iter.id===updatingTask.id ? updatingTask: iter)
    updatetaskList(listado);
    setSelectedTask({})
    setEditing(false);
  }


  return (
    <div className="container mt-5">
      <h4>Anotador de tareas</h4>
      <Formulario
        addTask={addTask}
        editing={editing}
        setEditing={setEditing}
        selectedTask={selectedTask}
        update={update}

        />
      <h4>Listado</h4>
      <ListadoTareas
        taskList={taskList}
        edit={edit}
        deleteTag={deleteTag}
      />
     
    </div>
  );
}

export default App;
