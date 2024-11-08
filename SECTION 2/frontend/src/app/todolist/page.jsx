'use client';
import { IconCircleCheckFilled, IconReload, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 0;
    // const [count, setCount] = useState(0);
    const [taskList, setTaskList] = useState([
        // { text: 'doodh lao', completed: false },
        // { text: 'khana khao', completed: false },
        // { text: 'code likho', completed: false },
        // { text: 'code commit kro', completed: false }
    ]);
    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);
            const newTask = {
                text: e.target.value, completed: false
            };
            setTaskList([
                newTask, ...taskList
            ]);
            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    const updateTask = (index) => {
        console.log(index);

        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);

    }

    return (
        <div className='bg-gray-500 h-screen pt-10'>
            <h1 className='text-center font-bold text-4xl my-5'>ToDo List</h1>
            <div className='container shadow mx-auto rounded-lg bg-white mt-5'>

                {/* <h1 className='text-5xl'>
                    {count}
                </h1>

                <button
                    onClick={() => {
                        setCount(count+1);
                            console.log(count);
                    }}>
                    Add Task
                </button> */}

                <div className='p-5 border-b-2'>
                    <input type="text" className='border-2 px-4 py-2 w-full' placeholder='Add a Task'
                        onKeyDown={addNewTask} />
                </div>

                <div className='p-5'>

                    {
                        taskList.map((task, index) => {
                            return <div key={index} className='border p-3 rounded mb-4 shadow'>

                                {/* <div className='grid grid-cols-3 items-center '> */}
                                    
                                    {
                                        task.completed ? (
                                            <p className='bg-green-600 mx-auto text-white w-fit px-2 rounded-full text-sm'>Completed</p>
                                        ) : (
                                            <p className='bg-yellow-400 mx-auto text-black w-fit px-2 rounded-full text-sm'>Pending</p>
                                        )
                                    }
                                    <p className='text-xl'>{task.text}</p>


                                {/* </div> */}

                                <div className='flex gap-3 mt-4'>
                                    <button
                                        className='flex items-center bg-red-600 rounded-full text-white px-3 py-1'
                                        onClick={() => { deleteTask(index) }}>
                                        <IconTrash size={18} color='black' />
                                        Delete
                                    </button>
                                    <button
                                        className={ `${ task.completed ? 'bg-yellow-500' : 'bg-blue-500' } bg-green-400 rounded-full text-white px-3 py-1` }
                                        onClick={() => { updateTask(index) }}>
                                        {
                                            task.completed ? (
                                                <p className='flex items-center'>
                                                    <IconReload className='mx-1' size={18} color='black'/>
                                                    Undo</p>
                                            ) : (
                                                <p className='flex items-center'>
                                                    <IconCircleCheckFilled className='mx-1' size={18} color='black'/>
                                                    Completed</p>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default TodoList; 