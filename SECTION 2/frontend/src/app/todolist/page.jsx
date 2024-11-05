'use client';
import React from 'react'

const TodoList = () => {

    let count = 0;

    return (
        <div className='bg-gray-500 h-screen pt-10'>
            <h1 className='text-center font-bold text-4xl my-5'>ToDo List</h1>
            <div className='container shadow mx-auto rounded-lg bg-white mt-5'>

                <h1 className='text-5xl'>
                    {count}
                </h1>

                <button
                    onClick={() => {
                        count++,
                            console.log(count);
                    }}>
                    Add Task
                </button>

                <div className='p-5 border-b-2'>
                    <input type="text" className='border-2 px-4 py-2 w-full' placeholder='Add a Task' />
                </div>

                <div className='p-5'>

                </div>

            </div>
        </div>
    )
}

export default TodoList;