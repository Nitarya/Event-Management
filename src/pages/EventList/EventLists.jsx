import EventCard from "../../components/EventCard/EventCard";
import "./EventLists.css";
import { eventList } from "../../utils/EventDatabase";

const EventLists = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };



  return (
    <div>
      {eventList.length > 0 ? (renderEventCards()) : <p>No events available.</p>}
    </div>
  );
};
export default EventLists;
