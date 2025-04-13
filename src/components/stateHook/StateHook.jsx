import React, { useState } from "react";

const Modal = () => {
 return (
  <div>
   <p>The task is Successfully delete</p>
  </div>
 );
};

const UpdateModal = ({ openUpdateModal, setOpenUpdateModal }) => {
 const [updateField, setUpdateField] = useState(openUpdateModal.name);

 console.log("update field", updateField);
 console.log("openUpdateModal", openUpdateModal);

 const handleUpdate = (e) => {
  e.preventDefault();
  openUpdateModal.name = updateField;
  const data = (openUpdateModal.name = updateField);
  setOpenUpdateModal(data);
 };
 return (
  <div>
   <form onSubmit={handleUpdate}>
    <input
     onChange={(e) => setUpdateField(e.target.value)}
     className="border"
     type="text"
     value={updateField}
    />
    <button className="border bg-yellow-100" type="submit">
     Update
    </button>
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
 const [openUpdateModal, setOpenUpdateModal] = useState(null);

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
  const deleteItem = showTask.filter((d) => d.id !== id);
  setShowTask(deleteItem);
  setDeleteText(true);
  setTimeout(() => {
   setDeleteText(false);
  }, [2000]);
  // console.log(edit);
 };

 const handleUpdate = (id) => {
  return setOpenUpdateModal(showTask.find((u) => u.id === id));
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
   {openUpdateModal && (
    <UpdateModal
     openUpdateModal={openUpdateModal}
     setOpenUpdateModal={setOpenUpdateModal}
    />
   )}

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
