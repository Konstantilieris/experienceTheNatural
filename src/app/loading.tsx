import CutoutTextLoader from "@/components/ui/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full">
      {" "}
      <CutoutTextLoader
        height="450px"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="/loader.jpg"
      />
    </div>
  );
};

export default Loading;
