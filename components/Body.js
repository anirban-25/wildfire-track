import React from "react";
import Image from "next/image";
function Body() {
  return (
    <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://www.providentins.com/wp-content/uploads/2019/02/iStock_1088438_LARGE.jpg" 
      layout="fill"
      className="opacity-50"
      objectFit="cover"
      />
      <span className="flex justify-end pl-[70%] pr-[10%] py-[5%] font-bold text-xs sm:text-sm md:text-sm lg:text-xl 2xl:text-2xl">
      app_name is a one-stop solution for all the firefighters who are able to get real time updates on where wild fire had broken in and can act accordingly. Lets leverage the use of tech and save lives of many...
      </span>
      
    </div>
  );
}

export default Body;
