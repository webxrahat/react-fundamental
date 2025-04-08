import React, { useState } from "react";

const StateHook = () => {
 const tasksList = [
  { id: 1, name: "breakfast" },
  { id: 2, name: "Lunch" },
  { id: 3, name: "Tiffin" },
 ];

 const [showTask, setShowTask] = useState(tasksList);
 const [inputTask, setInputTask] = useState("");

 //  console.log(showTask);

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
   id: Math.floor(Math.random() * 10000000),
   name: inputTask,
  };
  setShowTask((pre) => {
   return [...pre, formData];
  });
  setInputTask("");
 };

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     className="border"
     value={inputTask}
     onChange={(e) => setInputTask(e.target.value)}
    />
    <button className="border" type="submit">
     Submit
    </button>
   </form>

   {showTask.map((task) => {
    const { id, name } = task;
    return (
     <p key={id}>
      {id}. {name}
     </p>
    );
   })}
  </div>
 );
};

export default StateHook;
