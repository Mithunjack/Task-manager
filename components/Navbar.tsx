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

export default async function Navbar(){
    const tasks =  await getTasks();
    return (
        <>
        {tasks.map((task: any) => (
            <div key={task.id}>
                <h1>{task.title}</h1>
                <p>{task.status}</p>
            </div>
        ))}
        </>
    )
}