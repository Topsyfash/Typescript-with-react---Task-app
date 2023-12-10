import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e:React.FormEvent) => void;
}

const InputField = (props: Props) => {
    
    const inputRef = useRef<HTMLInputElement>(null);
    

    return (
        <form className='input' onSubmit={(e) => {
            props.handleAdd(e)
            inputRef.current?.blur();
        }}> 
            <input
                ref={inputRef}
                type="input"
                placeholder='Enter a Task'
                className='input-box'
                value={props.todo}
                onChange={
                    (e)=>props.setTodo(e.target.value)
                }
            />
            <button className='input-submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField