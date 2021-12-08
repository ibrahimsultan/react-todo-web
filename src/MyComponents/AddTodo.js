
import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description is required!");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3"  >
            <h3 className="my-5 mt-5 text-center mname "  > 
            <i class="bi bi-file-earmark-plus-fill"></i>
             Add your Todos Below  
            
            </h3>
            
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label mname">Todo Title </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control bg-form mname" id="title" placeholder="Title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label mname">Todo Description</label>
                    <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        className="form-control bg-form mname" placeholder="Write Description" id="desc" />
                </div>

                <button type="submit" className="btn btn-primary mname">
                <i class="fas fa-plus" />  Add Todo</button>
            </form>
            <hr />
        </div>
    )
}

