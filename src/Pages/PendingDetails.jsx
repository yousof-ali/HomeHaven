import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommonButton from "../Components/CommonButton";
import Swal from "sweetalert2";

const PendingDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/pending-details/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

  const handleBackone = () => {
    navigate(-1);
  };

  const handleAprove = () => {

    const newObject = {
        pendingId : data?._id,
        email : data?.email,
        img : data?.img,
        segment_name :data?.segment_name,
        location:data?.location,
        facilities:data?.facilities,
        description:data?.description,
        price:data?.price,
        title:data?.title,
        status:data?.status,
        area:data?.area,
    }

    Swal.fire({
        title: "Add this item?",
        position:'center',
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch('http://localhost:5000/addnew-estate',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newObject)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                fetch(`http://localhost:5000/admin-aprove/${data?._id}`,{
                    method:"PUT",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify({requestStatus:'Aprove'})
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    Swal.fire({
                        title: "Added!",
                        position:"center",
                        text: "You log out successfully!.",
                        icon: "success"
                    });
                    navigate(-1);
                      
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
           
        }
        });
    }


   
  

  return (
    <div className="p-4">
      <div className="flex flex-col items-center gap-4 p-4 rounded shadow-xl max-w-[1000px]  mx-auto md:flex-row">
        <div className="flex-1 ">
          <img src={data?.img} c className="w-full max-h-[400px] rounded-lg" alt="" />
        </div>

        <div className="flex-1 mt-2 space-y-2 md:mt-0">
          <h2 className="text-2xl font-bold text-yellow-600 my-4">Details</h2>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Segment Name : </p>
            <p className="font-semibold"> {data?.segment_name}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Title : </p>
            <p className="font-bold "> {data?.title}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Facilities : </p>
            <p className="font-light "> {data?.facilities?.join(",")}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Area : </p>
            <p className="font-light "> {data?.area} (sq ft) </p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Status : </p>
            <p className="font-light "> {data?.status}</p>
          </span>

          <span className="flex gap-2 items-center">
            <p className="font-semibold">Price : </p>
            <p className="font-light "> {data?.price}$</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Location : </p>
            <p className="font-light "> {data?.location}</p>
          </span>

          <p className="font-semibold ">
            Details : <span className="font-light">{data?.description}</span>
          </p>
          <p className="font-semibold pb-4">
            email : <span className="font-light">{data?.email}</span>
          </p>

          <div className="flex  gap-4">
            <CommonButton onClick={handleBackone}>Back</CommonButton>
            <CommonButton className={data?.requestStatus == 'Aprove'?'hidden':'block'}  onClick={handleAprove}>Aprove</CommonButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PendingDetails;
