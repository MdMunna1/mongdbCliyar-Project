import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Updete = () => {
  let user = useLoaderData();
  function hendelForm(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let updeteData = { name, email };
    fetch(`http://localhost:3000/user/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updeteData),// * aita jabe put ar req.body ar moddhe
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <div>Updete {user.name}</div>
      <form onSubmit={hendelForm} className="w-7/12 mb-6 mx-auto border">
        <input
          className="w-full p-2 border bg-slate-100 my-4"
          type="text"
          defaultValue={user?.name}
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
          defaultValue={user?.email}
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
      <Link className=" px-3 py-2 bg-slate-50" to={"/"}>
        Home
      </Link>
    </>
  );
};

export default Updete;
