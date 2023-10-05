import React from "react";
import Image from "next/image";
import LoadingSvg from "@/public/loading.svg";

const Loading = () => {
  return (
    <div className="w-full screenMinusNavHeight grid place-items-center">
      <Image src={LoadingSvg} width={100} height={100} alt="loading" />
    </div>
  );
};

export default Loading;
