import React, { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCard";
import { FaChevronDown } from "react-icons/fa";
import CommonButton from "../Components/CommonButton";
import { Helmet } from "react-helmet-async";

const Properties = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("all");
  const [dataLength, setDataLength] = useState(0);
  const [itemsPerPage, setItemsPerpage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfpage = Math.ceil(dataLength / itemsPerPage);

  const pageArray = [...Array(numberOfpage).keys()];

  // useEffect(() => {
  //   fetch(`http://localhost:5000/homes`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setAllData(result);
  //       setLoading(false);
  //     });
  // }, []);
  console.log(sortBy);

  useEffect(() => {
    fetch(
      `http://localhost:5000/pagination?page=${currentPage}&size=${itemsPerPage}&sortBy=${sortBy}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.length);
        setAllData(result);
        setLoading(false);
      });
  }, [currentPage, itemsPerPage, sortBy]);

  useEffect(() => {
    fetch(`http://localhost:5000/sale-rent?searchBy=${sortBy}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setDataLength(result.total);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [sortBy]);

  const handleSort = (optin1, optin2) => {
    setCurrentPage(optin1);
    setSortBy(optin2);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pageArray.length - 1) {
      setCurrentPage(currentPage + 1);
    }
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
              <a onClick={() => handleSort(0, "all")}>All</a>
            </li>
            <li
              className={`${
                sortBy == "hp" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort(0, "hp")}>High price</a>
            </li>
            <li
              className={`${
                sortBy == "lp" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort(0, "lp")}>Low price</a>
            </li>
            <li
              className={`${
                sortBy == "sale" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort(0, "sale")}>Sale</a>
            </li>
            <li
              className={`${
                sortBy == "rent" && "bg-yellow-600 text-white rounded"
              }`}
            >
              <a onClick={() => handleSort(0, "rent")}>Rent</a>
            </li>
          </ul>
        </div>
      </div>
      {loading && (
        <p className="text-center text-2xl mt-24">
          <span className="loading loading-spinner text-error"></span>
        </p>
      )}

      <div className="container grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
        {allData.map((singledata) => (
          <SingleCard key={singledata._id} singledata={singledata}></SingleCard>
        ))}
      </div>
      <div className="pagination">
        <div className="flex justify-center gap-3 mt-8">
          <button onClick={handlePrev} className="btn ">
            Prev
          </button>
          {pageArray.map((single) => (
            <button
              onClick={() => setCurrentPage(single)}
              className={`btn   ${
                single == currentPage &&
                "bg-yellow-600 hover:bg-yellow-500 text-white"
              }`}
            >
              {single + 1}
            </button>
          ))}
          <button onClick={handleNext} className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
