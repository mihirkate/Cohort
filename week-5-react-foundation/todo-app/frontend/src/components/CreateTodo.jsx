import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const addTodo = () => {
        fetch("http://localhost:3000/todo", {  // Check if you should use http or https
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong on API server!');
            }
        }).then(data => {
            alert("Todo added");
        }).catch(error => {
            console.error('Failed to fetch:', error);
            alert("Failed to add todo. Check console for errors.");
        });
    };
    
    return <div>
        <input type="text" placeholder="Title" />
        <br />
        <input type="text" placeholder="Description" onChange={(e)=>{
            setDescription(e.target.value);

        }}/>
        <br />
        <button onClick={addTodo}>Add Todo</button>
    </div>
}