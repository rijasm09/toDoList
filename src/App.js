import React, { useState } from 'react'
import './App.css';

function App() {

  const [toDos, setToDos] = useState([])
  //we are giving an empty array 
  //inside which each todos are stored in list, here toDos is an array
  const [toDo, setToDo] = useState('')
  //to store each of the words in a todo 

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">

        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {/* here in setToDofunction current typed character is entered into toDo and it keeps on updating as you  */}
        {/* keep typing, here e resembles event */}

        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
        {/* here array of objects is formed in array toDos */}

      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">

                  {/* CHECKBOX */}
                  <input onChange={(e) => {
                    console.log(e.target.checked); //e.target.value is the value inside the checkbox
                    console.log(obj);
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) { //here obj is the current object
                        obj2.status = e.target.checked //since it is checkbox instead of value, give checked
                      }
                      return obj2 //return after editing the object in the array
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />


                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
        <h1>Active Tasks</h1>
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (
                <div>

                  <h2>{obj.text}</h2>
                </div>
              )
            }
            return null // map is always expecting something to return
          })
        }

      </div>
    </div>
  );
}

export default App;
