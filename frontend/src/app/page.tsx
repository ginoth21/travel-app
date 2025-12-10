"use client";

import { useState } from "react";
import Button from "@/components/button";
import styles from "./page.module.css";
import {generateItinerary} from "@/utils/api";

export default function Home() {

  const [itinerary, setItinerary] = useState(null);
  const [destination, setDestination] = useState("");
  const [num_days, setNumDays] = useState(0);

  console.log(num_days);

  const generateClick = async () => {
    var data = await generateItinerary(destination, num_days);
    setItinerary(data.message);
  };

  return (
    <main>
      {/* <h1 className="text-4xl text-blue-500"> {data.message} </h1> */}
      <div className={styles.homePage}>
        <div className={styles.itineraryWindow}>
          <h1>Results</h1>
          <p> Pls provide info on the right side to get started </p>
          <p> {JSON.stringify(itinerary)} </p>
        </div>

        <div className={styles.options}>
          <h1>Options</h1>
            <ul>
              <li>
                <p>Destination</p>
                <input type="text" placeholder="Enter Location" value={destination} onChange={(e) => setDestination(e.target.value)}></input>
              </li>

              <li>
                <p>Duration</p>
                <input type="number" placeholder="Enter # of days" onChange={(e) => setNumDays(Number(e.target.value))} min={1}></input>
              </li>

              <li><p>Preferences</p></li>
            </ul>
            <Button label={"Generate"} clickFxn={generateClick}/>
        </div>
      </div>
    </main>
  );
}