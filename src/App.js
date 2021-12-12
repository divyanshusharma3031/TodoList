import "./App.css";
import Navbar from "./Components/Navbar";
import { Todoitem } from "./Components/Todoitem";
import { Footer } from "./Components/Footer";
import { useState,useEffect } from "react";
import Addtodo from "./Addtodo";
// agar default export nahi karte to {} use karne padenge
function App() {
  let inittodo
  if(localStorage.getItem("todos")===null)
  {
    inittodo=[];
  }
  else
  {
    inittodo=JSON.parse(localStorage.getItem("todos"))
  }
  const Ondelete = (todo) => {
    // Deleting The Elements.
    setTodos(
      todos.filter((e) => {
        return e !== todo;
        // Higher Order Method To delete.
      })
    );
    localStorage.setItem("todos",JSON.stringify(todos))
  };
  const addtodo = (title, desc) => {
    let sno=1;
    if (todos.length) {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      title: title,
      description: desc,
      sno: sno,
    };
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Navbar title="MyTodoList" todos={todos} />
      <Addtodo Addtodo={addtodo} />
      <Todoitem todo={todos} onDelete={Ondelete} />
      <Footer />
    </>
  );
}

export default App;
