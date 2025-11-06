import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if(!task) {
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  console.log(tasks);


  const removeTask = (index) => {
    // setTasks(tasks.filter((_, i) => i  !== index));
    setTasks(tasks.filter((task, i) => i  !== index));
  }

	return (
		<div>
			<h2>Todo App</h2>
			<div>
				<input
					type="text"
					placeholder="Add new task..."
          value={task}
					className="bg-gray-100 px-1 py-0.5 outline-none"
          onChange={e => setTask(e.target.value)}
				/>
				<button onClick={addTask} className="bg-green-500 text-white px-2 py-1">Add</button>
			</div>
      <div>
        {
          tasks.map((task, index) => (
            <div className="flex justify-between" key={index}><p>{task}</p><button className="text-red-600" onClick={() => removeTask(index)}>X</button></div>
          ))
        }

        { tasks.length === 0 && <p>You have no new tasks. Add tasks to begin!</p> }
      </div>
		</div>
	);
}

export default Todo;
