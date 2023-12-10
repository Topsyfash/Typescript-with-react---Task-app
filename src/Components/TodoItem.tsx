import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './Model';
import './styles.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todo: Todo;

}

const TodoItem = (props: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string | number>(props.todo.todo);


    function handleDone(id: number) {
        props.setTodos(props.todos.map((tod) => {
            return tod.id === id ? { ...tod, isDone: !tod.isDone } : tod
        }))
    }

    function handleDelete(id?: number) {
        props.setTodos(props.todos.filter((tod) => {
            return tod.id !== id
        }))
    }

    function handleEdit() {
        if (!edit && !props.todo.isDone) {
            setEdit(!edit);
        }
    }

    function handleEditChange(e: React.FormEvent, id: number) {
        e.preventDefault();

        props.setTodos(
            props.todos.map((tod) => (
                tod.id === id ?
                    { ...tod, todo: editTodo } :
                    tod
            )));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    },[edit])


    return (
        <form className='todo-item' onSubmit={(e) => handleEditChange(e, props.todo.id)}>
            {
                edit ? (
                    <input
                        ref = {inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className='todoitem-text'
                    />
                ) :
                    (
                        props.todo.isDone ?
                            (
                                <s className='todoitem-text'>
                                    {props.todo.todo}
                                </s>
                            ) : (
                                <span className='todoitem-text'>
                                    {props.todo.todo}
                                </span>
                            )

                    )
            }



            <div>
                <span className="buttons" onClick={handleEdit}>
                    Edit
                </span>
                <span className="buttons" onClick={() => handleDelete(props.todo.id)}>
                    Delete
                </span>
                <span className="buttons" onClick={() => handleDone(props.todo.id)}>
                    Done
                </span>
            </div>
        </form>
    )
}

export default TodoItem