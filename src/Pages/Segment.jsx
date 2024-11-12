import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../Components/SingleCard";

const Segment = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/segment?option=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="min-h-[80vh] py-8 max-w-[2000px] mx-auto  md:py-12 px-2 bg-slate-200">
      <div>
        <h2 className="text-3xl font-bold font-Josefin text-yellow-600 text-center">
          Search Properties
        </h2>
        <p className="text-center mb-4">Find your best Estate</p>
      </div>
      <div className="container grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
        {data.map((singledata) => (
          <SingleCard key={singledata.id} singledata={singledata}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Segment;
