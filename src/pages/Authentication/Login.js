import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center my-12">
          <div className="rounded-lg p-4 bg-white shadow-sm border-2 w-full md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-center text-lg md:text-2xl">
              Welcome to Tour Galaxy
            </h2>
            <div className="w-16 h-1.5 mx-auto my-4 rounded bg-yellow-400"></div>
            <button
              onClick={handleGoogleLogin}
              className="bg-blue-800 text-white font-bold text-xl p-2 my-2 rounded w-full"
            >
              <FcGoogle className="inline text-3xl mr-2" /> Continue With Google
            </button>
            <p className="text-center font-medium">
              Don't have an account? Create an account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
