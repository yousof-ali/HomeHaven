
import React, { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCard";
import { FaChevronDown } from "react-icons/fa";
import CommonButton from "../Components/CommonButton";
import { Helmet } from "react-helmet-async";



const Properties = () => {
  const [alldata, setallData] = useState([]);
  const [sortBy,setSortBy] = useState("all");


  useEffect(() => {
    fetch("http://localhost:5000/homes")
      .then((res) => res.json())
      .then((data) => {
        setallData(data);
        // if(id==0){
          
        //   setallData(data);
        //   setSorted(data);
        //   setDefault(data);
        // }
        // else if(id==1){
        //   const filtered = data.filter( single => single.segment_name == "Student Housing" );
        //   setallData(filtered);
        //   setSorted(filtered);
        //   setDefault(filtered);
        // }
        // else if(id==2){
        //   const filtered = data.filter(single => single.segment_name == "Vacation Rentals");
        //   setallData(filtered);
        //   setSorted(filtered);
        //   setDefault(filtered);
        // }
        // else if(id==3){
        //   const filtered = data.filter(single => single.segment_name == "Townhouse");
        //   setallData(filtered);
        //   setSorted(filtered);
        //   setDefault(filtered);
        // }
        // else if(id==4){
        //   const filtered = data.filter(single => single.segment_name == "Single Family Homes");
        //   setallData(filtered);
        //   setSorted(filtered);
        //   setDefault(filtered);
        // }
        // else if(id==5){
        //   const filtered = data.filter(single => single.segment_name == "Apartment");
        //   setallData(filtered);
        //   setSorted(filtered);
        //   setDefault(filtered);
        // }else{
        //   setallData(data);
        //   setSorted(data);
        //   setDefault(data);
        // }
        
      });
  }, []);
  
  
  useEffect(() => {
    fetch(`http://localhost:5000/properties?sortBy=${sortBy}`)
      .then(res => res.json())
      .then(result => {
        setallData(result)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, [sortBy]);
  

  const handleSort = (option) => {
    setSortBy(option);
  }
  
  
  // const handleSort = (sortBy) => {
  //   console.log(sortBy);
  //   if (sortBy === "all") {
  //     setallData(defalt);
  //     setStyle("all");
  //   } else if (sortBy === "hp") {
  //     const filtered = sorted.sort((a, b) => b.price - a.price);
  //     console.log(filtered);
  //     setallData(filtered);
  //     setStyle("hp");
  //     console.log(alldata);
  //   } else if (sortBy === "sale") {
  //     const filtered = sorted.filter((single) => single.status == "Sale");
  //     setallData(filtered);
  //     setStyle("sale");
      
  //   } else if (sortBy === "rent") {
  //     const filtered = sorted.filter((single) => single.status == "Rent");
  //     setallData(filtered);
  //     setStyle("rent");
      
  //   }else if(sortBy === "lp"){
  //     const filtered = sorted.sort((a,b) => a.price - b.price);
  //     setallData(filtered);
  //     setStyle("lp");
  //   }
  // };


  return (
    <div className="py-8 md:py-12 px-2  max-w-[2000px] mx-auto bg-slate-200">
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
            <CommonButton>sort by <FaChevronDown /></CommonButton>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content right-1 bg-base-100 rounded-box absolute z-[1] w-52 p-2 shadow"
          >
            <li className={`${sortBy=="all"&&"bg-yellow-600 text-white rounded"}`}>
              <a onClick={() => handleSort("all")}>All</a>
            </li>
            <li className={`${sortBy=="hp"&&"bg-yellow-600 text-white rounded"}`}>
              <a onClick={() => handleSort("hp")}>High price</a>
            </li>
            <li className={`${sortBy=="lp"&&"bg-yellow-600 text-white rounded"}`}>
              <a onClick={() => handleSort("lp")}>Low price</a>
            </li>
            <li className={`${sortBy=="sale"&&"bg-yellow-600 text-white rounded"}`}>
              <a onClick={() => handleSort("sale")}>Sale</a>
            </li>
            <li className={`${sortBy=="rent"&&"bg-yellow-600 text-white rounded"}`}>
              <a onClick={() => handleSort("rent")}>Rent</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
        {alldata.map((singledata) => (
          <SingleCard key={singledata.id} singledata={singledata}></SingleCard>
        ))}
      </div>
      
    </div>
  );
};

export default Properties;
