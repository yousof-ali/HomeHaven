import React, { useContext, useRef, useState } from "react";
import CommonButton from "../Components/CommonButton";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { authProvider } from "../Context/AuthContext";
import { MdErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logIn, googleLogin, gitHubLogin } = useContext(authProvider);
  const [hide, setHide] = useState(true);
  const [error, setError] = useState("");
  const emailref = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const hidePassword = () => {
    setHide(!hide);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const userInformation = {
          lastSignInTime
        };
        fetch(`https://haven-server-site.vercel.app/update-lastlogin?email=${email}`,{
          method:"PUT",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userInformation)
        })
        .then(res => res.json())
          .then(result => {
            console.log(result);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Log In",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location?.state ? location.state : "/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch(() => {
        setError("Wrong email or password!");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const displayName = result?.user?.displayName;
      const email = result?.user?.email;
      const emailStaus = result?.user?.emailVerified;
      const providerId = result?.providerId;
      const photoURL = result?.user?.photoURL;
      const creationTime = result?.user?.metadata?.creationTime;
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const userInformation = {
        displayName,
        email,
        emailStaus,
        photoURL,
        creationTime,
        lastSignInTime,
        providerId
      };
      fetch('https://haven-server-site.vercel.app/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userInformation)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if(result.alreadyTaken){
          fetch(`https://haven-server-site.vercel.app/update-lastlogin?email=${email}`,{
            method:"PUT",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(userInformation)
          })
          .then(res => res.json())
          .then(result => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err.message);
          })
        }
    })
      .catch((error) => {
        console.log(error.message);
      })
      navigate(location?.state ? location.state : "/");
    });
  };

  // const handleGithubLogin = () => {
  //   gitHubLogin().then((result) => {
  //     console.log(result);
  //     const displayName = result?.user?.displayName;
  //     const email = result?._tokenResponse?.screenName;
  //     const emailStaus = result?.user?.emailVerified;
  //     const providerId = result?.providerId;
  //     const photoURL = result?.user?.photoURL;
  //     const creationTime = result?.user?.metadata?.creationTime;
  //     const lastSignInTime = result?.user?.metadata?.lastSignInTime;
  //     const userInformation = {
  //       displayName,
  //       email,
  //       emailStaus,
  //       photoURL,
  //       creationTime,
  //       lastSignInTime,
  //       providerId
  //     };
  //     fetch('https://haven-server-site.vercel.app/users',{
  //       method:"POST",
  //       headers:{
  //         'content-type':'application/json'
  //       },
  //       body:JSON.stringify(userInformation)
  //     })
  //     .then(res => res.json())
  //     .then(result => {
        
  //       if(result.alreadyTaken){
  //         fetch(`https://haven-server-site.vercel.app/update-lastlogin?email=${email}`,{
  //           method:"PUT",
  //           headers:{
  //             'content-type':'application/json'
  //           },
  //           body:JSON.stringify(userInformation)
  //         })
  //         .then(res => res.json())
  //         .then(result => {
  //           console.log(result);
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         })
  //       }
        
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     })
  //     navigate(location?.state ? location.state : "/");
  //   });
  // };

  return (
    <div className="flex items-center justify-center py-8 min-h-[80vh] bg-gray-50-50">
      <Helmet>
        <title>Haven | Login</title>
      </Helmet>
      <div className="w-full mx-2 max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              ref={emailref}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="password"
              className="block  text-sm font-medium text-gray-600"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={`${hide ? "password" : "text"}`}
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 block w-full  px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <div
                className="text-2xl mr-3 absolute right-3 top-3"
                onClick={hidePassword}
              >
                {hide ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <button className="text-blue-600 mb-4 hover:underline">
            <p>Forget Password ?</p>
          </button>
          <p className="mb-2  text-sm text-red-600">
            {error && (
              <span className="flex items-center gap-1">
                {error}
                <MdErrorOutline />
              </span>
            )}
          </p>
          <CommonButton
            type="submit"
            className="w-full px-4 py-2  font-semibold rounded-md shadow-sm "
          >
            Login
          </CommonButton>
        </form>
        <p className="mt-4  text-gray-600">
          No account?{" "}
          <a href="/singUp" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
        <div className="divider">Or</div>
        <div className="flex justify-center items-center">
          <p
            onClick={handleGoogleLogin}
            className="text-3xl p-2 cursor-pointer rounded-xl  hover:bg-slate-100"
          >
            <FaGoogle />
          </p>
          {/* <p
            onClick={handleGithubLogin}
            className="text-3xl p-2 cursor-pointer rounded-xl  hover:bg-slate-100"
          >
            <FaGithub />
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
