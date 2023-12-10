import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/Model';
import TodoList from './Components/TodoList';
import {DragDropContext} from 'react-beautiful-dnd'





const App: React.FC = () => {
 
  const [todo, setTodo] = useState<string | number>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }])
      setTodo("")
    }
   };
  


  return (
    
    <DragDropContext onDragEnd={()=>{}}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />    
      </div>
      </DragDropContext>
  );
}

export default App;







// type Person = {
//   name: string,
//   age?: number;
// }

// function printName(name:string) {
//   console.log(name)
// }
// printName('ay')

// let myName: unknown;
// myName = 47;
// interface Person extends X {
//   name: string;
//   age?: number;
// }


// type X = {
//   c: string,
//   d: number;
// }
// type Y =X& {
//   a: string,
//   b: number;
// }

// let y: Y = {
//   a: "string",
//   b: 8,
//   c: "string",
//   d: 8,
// }