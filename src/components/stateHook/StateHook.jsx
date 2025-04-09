import React, { useState } from "react";

const Modal = () => {
 return (
  <div>
   <p>The task is Successfully delete</p>
  </div>
 );
};

const UpdateModal = ({ openUpdateModal }) => {
 const { name } = openUpdateModal;
 return (
  <div>
   <form>
    <input className="border" type="text" value={name} />
   </form>
  </div>
 );
};

const StateHook = () => {
 const tasksList = [
  { id: 1, name: "breakfast" },
  { id: 2, name: "Lunch" },
  { id: 3, name: "Tiffin" },
 ];

 const [showTask, setShowTask] = useState(tasksList);
 const [inputTask, setInputTask] = useState("");
 const [openModal, setOpenModal] = useState(false);
 const [deleteText, setDeleteText] = useState(false);
 const [openUpdateModal, setUpdateModal] = useState(false);

 //  console.log(showTask);

 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
   id: Math.floor(Math.random() * 100000),
   name: inputTask,
  };
  if (inputTask) {
   setShowTask((pre) => {
    return [...pre, formData];
   });
   setOpenModal(true);
   setTimeout(() => {
    setOpenModal(false);
   }, [2000]);
   setInputTask("");
  }
 };

 const handleDelete = (id) => {
  const edit = showTask.filter((d) => d.id !== id);
  setShowTask(edit);
  setDeleteText(true);
  setTimeout(() => {
   setDeleteText(false);
  }, [2000]);
  // console.log(edit);
 };

 const handleUpdate = (id) => {
  return setUpdateModal(showTask.find((u) => u.id === id));
 };
 console.log(openUpdateModal);

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
   {openModal && <p>Success fully added</p>}
   {deleteText && <Modal />}
   {openUpdateModal && <UpdateModal openUpdateModal={openUpdateModal} />}

   {showTask.map((task) => {
    const { id, name } = task;
    return (
     <div className="flex justify-between w-[300px] border">
      <p key={id}>
       {id}. {name}
      </p>
      <div>
       <button onClick={() => handleUpdate(id)} className="p-2 bg-green-200">
        update
       </button>
       <button onClick={() => handleDelete(id)} className="p-2 bg-red-200 ml-2">
        Delete
       </button>
      </div>
     </div>
    );
   })}
  </div>
 );
};

export default StateHook;
