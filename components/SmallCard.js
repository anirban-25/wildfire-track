import React, { useState } from "react";

import Image from "next/image";
function SmallCard({ id, title, location1, location2, data1, data2 }) {
  const [loc, setLoc] = useState(false);
  function setdist() {
    if (Math.abs(location1 - data1) < 5) {
      if (Math.abs(location2 - data2) < 5) {
        setLoc(true);
      }
    }
  }
  return (
    <div>
      {loc ? null : setdist()}
      {loc ? (
        <div className="m-2 mb-5 p-4 mt-5 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out w-60">
          <h2>{id}</h2>
          <h3 className="text-gray-500">{title}</h3>
        </div>
      ) : null}
    </div>
  );
}

export default SmallCard;
{
  /* <div className="m-2 mb-5 p-2 mt-5 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out">
          <h2>{id}</h2>
          <h3 className="text-gray-500">{title}</h3>
        </div> */
}
