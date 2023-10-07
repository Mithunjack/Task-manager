import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'

import CustomButton from '@/components/CustomButton';

const getTasks =  async() => {
    try {
        
        const res = await fetch('http://localhost:3000/api/tasks/', {
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Failed to fetch topics")
        }

        return res.json();
    }
    catch(error){
        console.log(error);
    }
}

const addTasks = async() => {
    try {
        console.log('adding task');
        const res = await fetch('http://localhost:3000/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: "SQL Task Added", status: false})
        })
        if(!res.ok){
            throw new Error("Failed to add topics")
        }

        return res.json();
    }
    catch(error){
        console.log(error);
    }
}

const removeTasks = async() => {
    try {
        console.log('removing task');
        const res = await fetch('http://localhost:3000/api/tasks/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: "65218de7119858f25182c305"})
        })
        if(!res.ok){
            throw new Error("Failed to remove topics")
        }

        return res.json();
    }
    catch(error){
        console.log(error);
    }
}

export default async function Tasks(){
    const tasks =  await getTasks();
    const addingtasks = await addTasks();
    const removingTask = await removeTasks();
    return (
        <>
            <div>
                <CustomButton value={"Add tasks"} onClick={addingtasks}/>
                {tasks.map((task: any) => (
                    <Editable defaultValue={task.title} key={task.id}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable>
                ))}
                <CustomButton value={"remove tasks"} onClick={removingTask}/>
         </div>
        </>
    )
}