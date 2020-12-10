import { useState, useEffect } from "react";

const Services = ({ city, search }) => {
  let [data, setData] = useState();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e7c409525a7304c3390db94c072ebce`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [search]);

  if (data) {
    var { temp, feels_like } = data.main; // desructuring
    var { description, icon } = data.weather[0]; // array method
  }

  let iconLink = `http://openweathermap.org/img/w/${icon}.png`;

  console.log(data);
  return (
    <div>
      <h1>Weather Data</h1>
      <h2>City: {city}</h2>
      <ul>
        <li>Temp: {temp}</li>
        <li>Feels Like: {feels_like}</li>
        <img src={iconLink} />
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default Services;
