"use client";

import Button from "@/components/button";
import styles from "./page.module.css";

async function getMessage() {
  const res = await fetch("http://localhost:8000");
  return res.json();
}

export default function Home() {

  // var data = await getMessage();

  return (
    <main>
      {/* <h1 className="text-4xl text-blue-500"> {data.message} </h1> */}
      <div className={styles.homePage}>
        <div className={styles.itineraryWindow}>
          <h1>Results</h1>
          <p> Pls provide info on the right side to get started </p>
        </div>

        <div className={styles.options}>
          <h1>Options</h1>
            <ul>
              <li><p>Destination</p></li>
              <li><p>Duration</p></li>
              <li><p>Preferences</p></li>
              <li><Button label={"Generate"}/></li>
            </ul>
        </div>
      </div>
    </main>
  );
}