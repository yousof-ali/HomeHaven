import React, { useContext, useEffect, useState } from "react";
import { getItems } from "../utilites/localstorage";
import { useLoaderData } from "react-router-dom";
import SingleBookmark from "../Components/SingleBookmark";
import { Helmet } from "react-helmet-async";
import { authProvider } from "../Context/AuthContext";


const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const {user} = useContext(authProvider);
  console.log(user.email);



  useEffect(() => {
    fetch(`http://localhost:5000/bookmark?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setBookmarks(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  },[])

  // useEffect(() => {
  //   const localstorage = getItems();
  //   const data = [];
  //   if (localstorage.length > 0) {
  //     for (const i of localstorage) {
  //       fetch(`http://localhost:5000/details/${i}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         data.push(result);
  //         console.log(result)
  //       })
  //     };
  //   };
  //   console.log(data);
  //   setBookmarks(data);
  //   console.log(bookmarks);
  
  // }, []);

 

  return (
    <div className="min-h-[70vh] bg-slate-200">
      <Helmet>
          <title>Haven | Bookmarks</title>
        </Helmet>
      
      <h2 className="text-2xl font-Josefin font-bold text-center text-yellow-600 pt-6">
        Bookmarks
      </h2>
      {bookmarks.length < 1 && (
        <h3 className="text-center mt-4 text-xl font-semibold">
          You have no bookmarks!!!
        </h3>
      )}
      <div className="container grid my-8 grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 mx-auto px-2">
        {bookmarks?.map((single, indx) => 
          <SingleBookmark
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
            key={indx}
            data={single}
          ></SingleBookmark>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
