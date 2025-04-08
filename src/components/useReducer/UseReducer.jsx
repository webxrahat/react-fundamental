import React, { useState } from "react";

const booksData = [
 { id: 1, name: "name 1" },
 { id: 2, name: "name 2" },
 { id: 3, name: "name 3" },
];

// const ran = Math.floor(Math.random());

// const n = Math.random() * 1000;

// console.log(n);

const Modal = ({ modalText }) => {
 return (
  <p className="transition duration-150 ease-in-out">
   Successfully add {modalText}
  </p>
 );
};

const UseReducer = () => {
 const [books, setBooks] = useState(booksData);
 const [bookName, setBookName] = useState("");
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [modalText, setModalText] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  setBooks((pre) => {
   const newBook = { id: Math.floor(Math.random() * 10000), name: bookName };
   return [...pre, newBook];
  });

  setIsModalOpen(true);

  setTimeout(() => {
   setIsModalOpen(false);
  }, [1000]);

  setModalText("New list add");
  setBookName("");
  // alert(bookName);
 };

 return (
  <div>
   <h2>Books Lists</h2>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     className="border"
     placeholder="Frist name"
     value={bookName}
     onChange={(e) => setBookName(e.target.value)}
    />
    {/* <input
     type="text"
     className="border"
     placeholder="Last name"
     value={bookName}
     onChange={(e) => setBookName(e.target.value)}
    /> */}

    <button type="submit" className="border">
     Submit
    </button>

    {isModalOpen && <Modal modalText={modalText} />}
   </form>
   {books.map((book) => {
    const { id, name } = book;
    return <li key={id}>{name}</li>;
   })}
  </div>
 );
};

export default UseReducer;
