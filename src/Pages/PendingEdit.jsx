import React, { useContext, useEffect, useState } from "react";
import { authProvider } from "../Context/AuthContext";
import CommonButton from "../Components/CommonButton";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const PendingEdit = () => {
  const { user } = useContext(authProvider);
  const { id } = useParams();
  const [oldData,setOldData] = useState({});
  const [segment, setSegment] = useState();
  const [statuss, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/pending-details/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setOldData(result);
        setSegment(result?.segment_name);
        setStatus(result?.status);
        console.log(result)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChangeCategory = (e) => {
    setSegment(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleUPdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.photo.value;
    const title = form.title.value;
    const segment_name = segment;
    const requestStatus = oldData?.requestStatus
    const description = form.description.value;
    const price = parseInt(form.price.value);
    const status = statuss;
    const area = parseInt(form.area.value);
    const location = form.location.value;
    let facilitiess = form.facilities.value;
    const facilities = facilitiess.split(/\s+/);

    const updated = {img,title,requestStatus,segment_name,description,price,status,area,location,facilities};
    console.log(updated);

    fetch(`http://localhost:5000/pending-update/${id}`,{
      method:"PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updated)
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your request is pending",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    })

  //   const email = user?.email;
  //   const name = user?.displayName;
  //   const newEstate = {
  //     img,
  //     title,
  //     segment_name,
  //     description,
  //     price,
  //     status,
  //     area,
  //     location,
  //     facilities,
  //     email,
  //     name,
  //     requestStatus,
  //   };
  //   fetch("http://localhost:5000/sale-rent-request", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newEstate),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       if (result.insertedId) {
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Your request is pending",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //         form.reset();
  //         navigate(-1);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  };
  return (
    <div>
      <div className="min-h-[80vh] container mx-auto my-6">
        <h1 className="text-3xl text-center font-bold font-Josefin text-yellow-600">
          Update
        </h1>
        <p className="text-center">
          This is your recent pending Estate . You can update your information
          for your estate.
        </p>

        <div className="max-w-[1200px] shadow-xl mx-2 border-yellow-600 bg-slate-200 md:mx-auto mt-6 rounded p-6 md:p-10 border-2">
          <div className="flex items-center mb-4">
            <img src="/logo.png" className="w-20" alt="" />
            <h2 className="text-2xl font-bold font-Josefin text-yellow-500">
              Haven
            </h2>
          </div>
          <form onSubmit={handleUPdate}  className="  ">
            <div className="flex gap-6 flex-col md:flex-row w-full">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text ">Proparty Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Proparty Name"
                  name="title"
                  defaultValue={oldData?.title}
                  className="border p-2 rounded border-black  outline-yellow-500"
                  required
                />
              </div>
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="p-2 rounded border border-black outline-yellow-600"
                  name=""
                  id=""
                  onChange={handleChangeCategory}
                >
                  <option value="Single Family Homes">
                    {" "}
                    Single Family Homes
                  </option>
                  <option value="Townhouse"> Townhouse</option>
                  <option value="Vacation Rentals"> Vacation Rentals</option>
                  <option value="Apartment"> Apartment</option>
                  <option value="Student Housing"> Student Housing</option>
                  <option value="Apartment"> Apartment</option>
                </select>
              </div>
            </div>
            <div className="flex gap-6 flex-col md:flex-row w-full">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text ">Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  defaultValue={oldData?.img}
                  placeholder="Proparty Photo"
                  className="border p-2 rounded border-black  outline-yellow-500"
                  required
                />
              </div>
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Details"
                  name="description"
                  defaultValue={oldData?.description}
                  className="border p-2 rounded border-black outline-yellow-500"
                  required
                />
              </div>
            </div>

            <div className="flex gap-6 flex-col md:flex-row w-full">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text ">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  defaultValue={oldData?.location}
                  name="location"
                  className="border p-2 rounded border-black  outline-yellow-500"
                  required
                />
              </div>
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text">Facilities</span>
                </label>
                <input
                  type="text"
                  name="facilities"
                  defaultValue={oldData?.facilities}
                  placeholder="living room , kitchen , swimming pool etc."
                  className="border p-2 rounded border-black outline-yellow-500"
                  required
                />
              </div>
            </div>

            <div className="flex gap-6 flex-col md:flex-row w-full">
              <div className="form-control  md:w-1/2">
                <label className="label">
                  <span className="label-text">Area</span>
                </label>
                <input
                  type="number"
                  name="area"
                  placeholder="Area (sq)"
                  defaultValue={oldData.area}
                  className="border p-2 rounded border-black outline-yellow-500"
                  required
                />
              </div>
              <div className="form-control flex flex-row  gap-4 items-center   md:w-1/2">
                <div>
                  <label className="label">
                    <span className="label-text ">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={oldData?.price}
                    placeholder="Price $"
                    className="border p-2 rounded border-black  outline-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text ">Status</span>
                  </label>
                  <select
                    onChange={handleChangeStatus}
                    className="p-2 rounded border  border-black outline-yellow-600"
                    name=""
                    id=""
                  >
                    <option value="Sale"> Sale</option>
                    <option value="Rent"> Rent</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" flex justify-end mt-8">
              <CommonButton>Update</CommonButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendingEdit;
