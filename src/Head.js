import "./Head.css";
function Head(props) {
  const TimeDate = new Date();
  const day = TimeDate.getDay();
  const date = TimeDate.getDate();
  const months = TimeDate.getMonth();
  const Hours = TimeDate.getHours();
  const year = TimeDate.getFullYear();
  const Time = TimeDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const DayArry = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MonthsArry = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decmber",
  ];
  let happy = "";
  let sunmoon = "";
  if (Hours >= 6 && Hours < 12) {
    happy = "Morning";
    sunmoon = "fa-solid fa-cloud-sun";
  } else if (Hours >= 12 && Hours < 16) {
    happy = "Afternoon";
    sunmoon = "fa-solid fa-sun";
  } else if (Hours >= 16 && Hours < 21) {
    happy = "Evening";
    sunmoon = "fa-regular fa-sun";
  } else {
    happy = "Night";
    sunmoon = "fa-solid fa-moon";
  }

  return (
    <>
      <div className="clock">
        <h1>{Time}</h1>
        <p>
          {DayArry[day]}, {date} {MonthsArry[months]}, {year}
        </p>
        <h3>
          <i className={sunmoon}></i> Good {happy} {props.guest}
        </h3>
      </div>
    </>
  );
}
export default Head;
