import React from 'react';
import Task from '../Task/Task';

const Tasks = ({count,resolvedTask}) => {
    
    return(
        <div className='space-y-5'>
           
            {
                count.map(task=> <Task key={task.id} task={task}
                resolvedTask={resolvedTask}></Task>)
            }

        <div className='bg-white rounded-2xl shadow-2xl p-5 space-y-2'>
            <h4 className='w-full font-semibold'>Resolved Tasks</h4>
            <p className="">No resolved tasks yet.</p>  
        </div>
        </div>
    );
};

export default Tasks;