import React from "react";
import { useState } from "react";
export default function Addtodo(props) {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("")
    const Submit=(e)=>
    {
        e.preventDefault();
        if(!title || !description)
        {
            alert("Title or Description Cant be blank ");
        }
        else{
            props.Addtodo(title,description);
            setTitle("");
            setdescription("");
        }
    }
  return (
    <div className="container my-3 py-3">
        <h3>
            Add Todo 
        </h3>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
