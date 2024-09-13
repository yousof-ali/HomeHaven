import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCard";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Properties = () => {
  const [alldata, setallData] = useState([]);
  const [sorted,setSorted] = useState()
  console.log(alldata);
  const [defalt,setDefault] = useState();
  
  const [arow, setarow] = useState(true);
  
  useEffect(() => {
    fetch("/alldata.json")
      .then((res) => res.json())
      .then((data) => {
        setallData(data);
        setSorted(data);
        setDefault(data);
      });
  }, []);
   
  const handleSort = (sortBy) => {
    console.log(sortBy)
    if(sortBy === "all"){
        setallData(defalt);
    }else if(sortBy === "hp"){
        const filtered = sorted.sort((a,b) => b.price - a.price)
        console.log(filtered);
        setallData(filtered);
        console.log(alldata);
       
    }else if(sortBy === 'sale'){
        const filtered = sorted.filter(single => single.status == "Sale")
        setallData(filtered);
    }else if(sortBy === 'rent'){
        const filtered = sorted.filter(single => single.status == "Rent")
        setallData(filtered);
    }
  }

  return (
    <div className="py-8 md:py-12 px-2  max-w-[2000px] mx-auto bg-slate-200">
      <div>
        <h2 className="text-3xl font-bold font-Josefin text-yellow-600 text-center">
          Search Properties
        </h2>
        <p className="text-center mb-4">Find your best Estate</p>
      </div>
      <div className="mx-4 my-4 flex justify-end ">
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            sort by <FaChevronDown />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content right-1 bg-base-100 rounded-box absolute z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleSort("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleSort("hp")} >High price</a>
            </li>
            <li>
              <a onClick={() => handleSort("lp")} >Low price</a>
            </li>
            <li>
              <a onClick={() => handleSort("sale")} >Sale</a>
            </li>
            <li>
              <a onClick={() => handleSort("rent")} >Rent</a>
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
