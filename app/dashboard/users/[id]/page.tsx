import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div className="text-3xl">USER PROFILE: {id} </div>;
};

export default page;
