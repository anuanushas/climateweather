import "./Weacondtion.css";
function Weacondtion(props) {
  const TimeDate = new Date();
  const months = TimeDate.getMonth();
  const date = TimeDate.getDate();
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
  return (
    <>
      <div className="card">
        {props.data ? (
          <>
            <div className="cli-wea">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                {props.data?.name} {props.data?.sys?.country}
              </p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${props.data?.weather[0].icon}.png`}
              alt="icon"
            />
            <p className="degree">
              Today, {date} {MonthsArry[months]}{" "}
            </p>
            <h1 className="condition-weather">
              {Math.trunc(props.data?.main?.temp - 273.15)}&#176;
            </h1>
            <p>{props.data?.weather[0].main}</p>
            <div className="wind">
              <i className="fa-solid fa-wind"></i>
              <p> Wind</p> | <p>{Math.trunc(props.data?.wind?.speed)} km/h</p>
            </div>
            <div className="wind">
              <i className="fa-solid fa-droplet"></i>
              <p> Hum</p>| <p>{props.data?.main?.humidity} %</p>
            </div>
          </>
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </>
  );
}
export default Weacondtion;
