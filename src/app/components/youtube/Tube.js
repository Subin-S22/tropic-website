import React from "react";

const Youtube = () => {
  return (
    <div className="md:my-16 my-8 px-6 max-w-screen-lg mx-auto">
      <div className="sm:block hidden">
        <iframe
          src="https://www.youtube.com/embed/VX9nJFQlumw"
          width={"100%"}
          height={"500px"}
          allowFullScreen
        />
      </div>
      <div className="sm:hidden block">
        <iframe
          src="https://www.youtube.com/embed/VX9nJFQlumw"
          width={"100%"}
          height={"300px"}
          frameborder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Youtube;
