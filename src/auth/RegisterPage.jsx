import React from "react";
import { Link } from "react-router-dom";
export const RegisterPage = () => {
  return (
    <div className='w-screen h-screen bg-[url("https://wallpaperaccess.com/full/461068.jpg")] flex flex-col justify-center  '>
      <div className="  mx-auto rounded-lg w-80 h-96 flex flex-col justify-center">
        <div className="border-1 rounded-lg h-96 w-80 mx-auto  backdrop-blur-sm bg-black/50">
          <h3 className="text-center text text-4xl mt-5 font-semibold text-stone-300">
            Register
          </h3>
          <form className="fle flex-col m-9  mt-5 text-stone-200 text-lg">
            <p>Name</p>
            <input
              type={"text"}
              placeholder="Name"
              name="name"
              autoComplete="off"
              className="border-1 rounded-md  w-full"
            />
            <p>Email</p>
            <input
              type={"email"}
              placeholder="Email"
              name="email"
              autoComplete="off"
              className="border-1 rounded-md  w-full"
            />
            <p>Password</p>
            <input
              type={"password"}
              placeholder="Password"
              name="password"
              className="border-1 rounded-md  w-full"
            />
            <p>Repeat Password</p>
            <input
              type={"password"}
              placeholder="Repeat Password"
              name="password2"
              className="border-1 rounded-md   w-full"
            />
            <button
              className=" w-52 h-10 m-5 rounded-md bg-slate-600 hover:bg-slate-500 hover:text-zinc-50"
              type="submit"
              // disabled='true'
            >
              <Link to={"/auth/login"}> Register</Link>
            </button>
            {/* <Link className='link ' to={'/auth/login'} >
                Already registered?
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};
