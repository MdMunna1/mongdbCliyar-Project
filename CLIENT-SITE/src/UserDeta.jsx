import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDeta = () => {
  //   let users = useLoaderData();
  const [users, setUsers] = useState(useLoaderData());
  function hendelDelet(id) {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // ডিলিট হওয়া ইউজার ফিল্টার করে নতুন লিস্ট সেট করা
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
          alert("Delet Success");
        } else {
          console.error("Error deleting user:", data.message);
        }
      });
  }

  return (
    <>
      <h1>Munna - Total Users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <div key={user.id} className="flex gap-5 my-3 border">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => hendelDelet(user._id)}>X</button>
           <Link to={`/updete/${user._id}`}> <button>Updete</button></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDeta;
