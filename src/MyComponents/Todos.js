import React from 'react'
import { TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }

    return (
        <div className= "container" style={myStyle}>
            <h3  className="text-center my-5 mt-5 mname">
                <i class="fas fa-clipboard-list"></i> My Todos List</h3>
            
            {props.todos.length===0? "No Todos are added! Tap on + Icon to add Todos":
            props.todos.map((todo)=>{
                return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }
            
        </div>
    )
}
