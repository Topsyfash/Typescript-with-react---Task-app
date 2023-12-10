import React from 'react'
import './styles.css'
import { Todo } from './Model';
import TodoItem from './TodoItem';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList = (props: Props) => {
    return (
        <div className="container">
            <Droppable droppableId='Todos-list'>
                {
                    (provided) => (
                        <div className="todos"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <span className='todos__heading'>Active Tasks</span>
                            {props.todos.map((tods) => {
                                return <TodoItem
                                    key={tods.id}
                                    todo={tods}
                                    todos={props.todos}
                                    setTodos={props.setTodos}
                                />
                            })}
                        </div>
                    )
                }

            </Droppable>
            <Droppable droppableId='Todos-remove'>
                {
                    (provided) => (
                        <div className="todos remove"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <span className='todos__heading'>Completed Tasks</span>
                            {props.completedTodos.map((tods) => {
                                return <TodoItem
                                    key={tods.id}
                                    todo={tods}
                                    todos={props.completedTodos}
                                    setTodos={props.setCompletedTodos}
                                />
                            })}
                        </div>
                    )
                }
            </Droppable>

        </div>
    )
}

export default TodoList

