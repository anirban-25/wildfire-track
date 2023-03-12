import React, { useState } from "react";
import SmallCard from "../components/SmallCard";
import { useRouter } from "next/router";
export default function FooterAgain({ exploreData, exploreDataWildFires }) {
  const router = useRouter();
  const {
    query: { data1, data2 },
  } = router;

  const props = {
    data1,
    data2,
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl ml-2 sticky top-0">
          Wildfires near-around ({data1},{data2}):
        </h1>
      </div>
      <div className="flex">
        {
          <>
            {exploreDataWildFires?.map(
              ({ id, title, location1, location2 }) => (
                <SmallCard
                  id={id}
                  title={title}
                  location1={location1}
                  location2={location2}
                  data1={data1}
                  data2={data2}
                />
              )
            )}
          </>
        }
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events", {
    next: { revalidate: 10 },
  });
  const { events } = await res.json();
  let exploreDataWildFires = [];
  let locationInfo = {};
  events.map((ev, _) => {
    if (ev.categories[0].id === "wildfires") {
      locationInfo = {
        id: ev.id,
        title: ev.title,
        location1: ev.geometry[0].coordinates[0],
        location2: ev.geometry[0].coordinates[1],
      };
      console.log(locationInfo);
      exploreDataWildFires.push(locationInfo);
    }
  });
  const exploreData = exploreDataWildFires;
  return {
    props: {
      exploreDataWildFires,
      exploreData,
    },
  };
}
