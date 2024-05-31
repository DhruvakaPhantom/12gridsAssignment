import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="text-3xl  italic font-semibold flex flex-col gap-10">
        404 Page Not found
        <Link
          to={"/"}
          className="cursor-pointer bg-[#00ADEE] text-white p-2 rounded-3xl flex justify-center items-center"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Error;
