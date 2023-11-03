import React from "react";

const page = ({ params }) => {
  console.log(params.slug);
  return (
    <div className="text-lg text-white flex items-center justify-center w-full h-screen">
      Hello, currently viewing: {params.slug}
    </div>
  );
};

export default page;
