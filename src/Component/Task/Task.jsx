import React from 'react';
import "./Task"

const Task = ({task,resolvedTask}) => {
    return (
        <div className='bg-white rounded-2xl shadow-2xl p-5 space-y-2'>
            <h4 className='w-full font-semibold'>{task.title}</h4>
            <button onClick={()=>resolvedTask(task.id)} className='btn bg-[#02A53B] text-center text-white rounded-2xl w-full'>Complete</button>
            
        </div>
    );
};

export default Task;