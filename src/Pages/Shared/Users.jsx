import React, {  useEffect, useState } from "react";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((result) => {
        setAllUsers(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const handleDelete = (id) => {
  //        fetch(`http://localhost:5000/user-delete/${id}`,{
  //         method:"DELETE"
  //        })
  //        .then(res => res.json())
  //        .then(result => {
  //         console.log(result);
  //        })
  //        .catch((err) => {
  //         console.log(err.message);
  //        });
  // };

  return (
    <div>
      <h2 className="text-center bg-gray-200  font-bold py-4 text-3xl text-yellow-600">
        Users
      </h2>
      <div className="overflow-x-auto overflow-y-auto">
        <table className="table">
          <thead className="bg-black text-white">
            <tr>
              <th>No</th>
              <th>Img</th>
              <th>Name</th>
              <th>Email or Auth Username</th>
              <th>Login With</th>
              <th>Email Status</th>
              <th>Creation Time</th>
              <th>Last Login</th>
              {/* <th>x</th> */}
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((single, indx) => (
              <tr key={indx} className="hover:shadow-md">
                <th>{indx + 1}</th>
                <td>
                  <img
                    className="lg:w-12 md:w-10 md:h-10 h-8 w-8 lg:h-12 rounded-full"
                    src={single?.photoURL}
                    alt=""
                  />
                </td>
                <td>{single?.displayName}</td>
                <td>{single?.email}</td>
                <td>{single?.providerId}</td>
                <td>{`${single?.emailStaus ? "verified" : "Not Verified"}`}</td>
                <td>{single?.creationTime}</td>
                <td>{single?.lastSignInTime}</td>
                {/* <td><button onClick={() => handleDelete(single?._id)} className="btn btn-primary">X</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
