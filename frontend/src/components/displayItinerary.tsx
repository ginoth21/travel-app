import styles from "./displayItinerary.module.css";

type Activity = {
  activity: string;
  location: string;
  time: string;
};

type Day = {
  morning: Activity;
  afternoon: Activity;
  evening: Activity;
};

type Itinerary = {
  [key: string]: Day;
};

type DisplayItineraryType = {
  itinerary: Itinerary;
};

export default function DisplayItinerary({ itinerary }: DisplayItineraryType) {
  return (
    <div>
      {Object.entries(itinerary).map(([dayKey, dayValue]) => (
        <div key={dayKey}>
          <h2>{dayKey.toUpperCase().replace("DAY", "DAY ")}</h2>

          {Object.entries(dayValue).map(([timeOfDay, activity]) => (
            <p key={timeOfDay}>
              <b>{activity.time}:</b> {activity.activity} — {activity.location}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}