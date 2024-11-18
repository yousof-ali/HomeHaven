import React, { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCard";
import { FaChevronDown } from "react-icons/fa";
import CommonButton from "../Components/CommonButton";
import { Helmet } from "react-helmet-async";

const Properties = () => {
  const [allData,setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy,setSortBy] = useState('all');

  
  useEffect(() => {
      fetch(`http://localhost:5000/homes`)
      .then(res => res.json())
      .then(result => {
          setAllData(result);
          setLoading(false);
          
      })
  },[])


  const handleSort = (option) => {
    fetch(`http://localhost:5000/homes?sortBy=${option}`)
      .then(res => res.json())
      .then(result => {
          setAllData(result);
          setSortBy(option);
          setLoading(false);
          
      })
    
  };

  

  return (
    <div className="py-8 md:py-12 px-2 min-h-[80vh]  max-w-[2000px] mx-auto bg-slate-200">
      <Helmet>
        <title>Haven | Properties</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold font-Josefin text-yellow-600 text-center">
          Search Properties
        </h2>
        <p className="text-center mb-4">Find your best Estate</p>
      </div> 
       <div className="mx-4 my-4 flex justify-end ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" m-1 ">
            <CommonButton>
              sort by <FaChevronDown />
            </CommonButton>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content right-1 bg-base-100 rounded-box absolute z-[1] w-52 p-2 shadow"
          >
            <li
              className={`${
                sortBy == "all" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort("all")}>All</a>
            </li>
            <li
              className={`${
                sortBy == "hp" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort("hp")}>High price</a>
            </li>
            <li
              className={`${
                sortBy == "lp" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort("lp")}>Low price</a>
            </li>
            <li
              className={`${
                sortBy == "sale" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort("sale")}>Sale</a>
            </li>
            <li
              className={`${
                sortBy == "rent" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort("rent")}>Rent</a>
            </li>
          </ul>
        </div>
      </div>
      {
        loading && <p className="text-center text-2xl mt-24"><span className="loading loading-spinner text-error"></span></p>
      }
     
      <div className="container grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
          {
            allData.map(singledata => <SingleCard key={singledata._id} singledata={singledata}></SingleCard>)
          }
        </div>
    </div>
  );
};

export default Properties;
