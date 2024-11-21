import React, { useEffect, useState } from "react";
import CommonButton from "../../Components/CommonButton";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const [data,setData] = useState({});
    const [segment, setSegment] = useState('');
    const [statuss, setStatus] = useState('');
    const navigate = useNavigate();

    const backONe = () => {
      navigate(-1)
    }
    
    const handleChangeCategory = (e) => {
      setSegment(e.target.value);
    };
  
    const handleChangeStatus = (e) => {
      setStatus(e.target.value);
    };

    useEffect(()=> {
        fetch(`http://localhost:5000/details/${id}`)
        .then(res => res.json())
        .then(result => {
            setData(result);
            setSegment(result?.segment_name);
            setStatus(result?.status)
        })
    },[])
    console.log(data)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const img = form.photo.value
        const title = form.title.value
        const segment_name = segment
        const description = form.description.value
        const price = parseInt(form.price.value);
        const status = statuss
        const area = parseInt(form.area.value);
        const location = form.location.value
        let facilitiess = form.facilities.value
        const facilities = facilitiess.split(/\s+/);
        const newEstate = {img,title,segment_name,description,price,status,area,location,facilities};
        console.log(newEstate);
        fetch(`http://localhost:5000/update/${data?._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newEstate)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
  return (
    <div>
      <h2 className="text-center bg-gray-200  font-bold py-4 text-3xl text-yellow-600">
        Update
      </h2>
      <div className="overflow-x-auto    bg-gray-200 rounded p-6 md:p-10 border-2">
        <div className="flex mb-4  items-center">
          <img src="/logo.png" className="w-20" alt="" />
          <h2 className="text-2xl font-bold font-Josefin text-yellow-500">
            Haven
          </h2>
        </div>
        <form onSubmit={handleUpdate}  className=" space-y-4 py-5  ">
          <div className="flex gap-6 flex-col md:flex-row w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Proparty Name</span>
              </label>
              <input
                type="text"
                placeholder="Proparty Name"
                defaultValue={data?.title}
                name="title"
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
                <option  value="Single Family Homes">
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
                placeholder="Proparty Photo"
                className="border p-2 rounded border-black  outline-yellow-500"
                defaultValue={data?.img}
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
                className="border p-2 rounded border-black outline-yellow-500"
                defaultValue={data?.description}
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
                name="location"
                className="border p-2 rounded border-black  outline-yellow-500"
                defaultValue={data?.location}
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
                placeholder="living room , kitchen , swimming pool etc."
                className="border p-2 rounded border-black outline-yellow-500"
                defaultValue={data?.facilities?.slice(' ')}
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
                className="border p-2 rounded border-black outline-yellow-500"
                defaultValue={data?.area}
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
                  placeholder="Price $"
                  className="border p-2 rounded border-black  outline-yellow-500"
                  defaultValue={data?.price}
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
          <div className=" flex gap-4 justify-end ">
          <div>
              <button onClick={backONe} className="btn hover:bg-gray-700 bg-black text-white">Back</button>
            </div>
            <div>
            <CommonButton>Update</CommonButton>
            </div>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
