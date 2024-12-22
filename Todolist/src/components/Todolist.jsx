import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import './todo.css';

const Todolist = () => {
    const [input, setInput] = useState(''); // Initialize as empty string
    const [data, setData] = useState([]); // Array to store todo items
    const [editIndex, setEditIndex] = useState(-1); // Index for editing
    const [filter , setFilter] = useState('Default')
   
    const inputText = (e) => {
        e.preventDefault();
        setInput(e.target.value); 
    };

    const handleEdit = (index) => {
        setInput(data[index].text);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
        
    };

    const addTodo = () => {
        if (editIndex >= 0) {
            const updatedData = data.map((item, index) =>
                index === editIndex ? { ...item, text: input } : item
            );
            setData(updatedData);
            setEditIndex(-1);
        } else {
            setData([...data, { text: input, checked: false }]);
        }
        setInput('');
    };

    const handleCheck = (index) => {
        const updatedData = data.map((item, i) =>
            i === index ? { ...item, checked: !item.checked } : item
        );
        setData(updatedData);
    };

    const handleCompleted =() =>{
    return  data.filter(item =>{
        if(filter === 'Completed') return item.checked;
        if(filter === 'InCompleted') return !item.checked;
        return true;
     });
     
    };
    const filteredTodos = handleCompleted();

    const markedAllCompleted = () =>{
        setData(prevData =>prevData.map(item =>({...item , checked:true})));
        setFilter('All Completed')
    }

    return (
        <div className='Todolist-container'>
            <div className='container'>
                <h2 className='heading'>Personal Todo App</h2>

                <div className='todo-item'>
                    <input
                        type='text'
                        placeholder='Enter Todo items'
                        value={input}
                        onChange={inputText}
                    />
                    <button className='btn' onClick={addTodo}>
                        {editIndex >= 0 ? 'Update' : 'ADD'}
                    </button>
                </div>

                <div className='drop-down'>
                    <select className="myDropdown" onChange={(e)=>setFilter(e.target.value)}>
                        <option value="Default" >Default</option>
                        <option value="Completed" >Completed</option>
                        <option value="InCompleted" >InCompleted</option>
                    </select>
                    <button value="All Completed"  onClick={markedAllCompleted}>
                        Mark All Completed 
                    </button>
                </div>

                <ul>

                    {filteredTodos.map((item, index) => (
                        <li key={index} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                            {item.text}
                            <div className='icons'>
                                <FaEdit 
                                    size={18} 
                                    className='edit-icon' 
                                    onClick={() => handleEdit(index)} 
                                />
                                <FaTrash 
                                    size={18} 
                                    className='trash-icon' 
                                    onClick={() => handleDelete(index)} 
                                />
                            <span >
                                <input
                                 type='checkbox'
                                 checked={data.checked}
                                onChange={() => handleCheck(index)}
                                style={{ display: 'none' }}
                                />
                                {item.checked ?(
                                    <FaTimes
                                    size={18} 
                                    className='cross-icon' 
                                    onClick={() => handleCheck(index)} 
                                    />
                                ):(
                                    <FaCheck 
                                    size={18} 
                                    className='check-icon' 
                                    onClick={() => handleCheck(index)} 
                                />  
                                )
                                }

                             </span>   
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todolist;
