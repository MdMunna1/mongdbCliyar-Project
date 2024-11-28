import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  function hendelForm(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let obj = { name, email }; // * ai obj ta ami server a pathaite caile akta post create korte hobe servert a
    fetch("http://localhost:3000/user", {
      // ! aikhane kon methot ar kache jabe ta bole deya lagbe noile get ar kache cole jay amra post ar kache deta pathaite cau tai post likhe dite hobe
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("succes");
      });
  }

  return (
    <>
      <h1 className="text-red-500 mt-10">Munna</h1>
      <form onSubmit={hendelForm} className="w-7/12 mb-6 mx-auto border">
        <input
          className="w-full p-2 border bg-slate-100 my-4"
          type="text"
          placeholder="Name"
          name="name"
          id=""
        />{" "}
        <br />
        <input
          className="w-full p-2 border bg-slate-100 my-4"
          type="text"
          placeholder="Email"
          name="email"
          id=""
        />{" "}
        <br />
        <input
          className="font-bold mt-5 bg-slate-400 p-2 rounded-lg"
          type="submit"
          name=""
          id=""
        />
      </form>
      <Link className=" px-3 py-2 bg-slate-50" to={"/user"}>
        User
      </Link>
    </>
  );
}

export default App;
