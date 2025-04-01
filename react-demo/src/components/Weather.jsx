import React from 'react';

const Weather = ({ temperature }) => {
  const check = (temp) => {
    if (temp < 15) {
      return "It's cold out side!";
    } else if (temp >= 15 && temp <= 25) {
      return "It's nice outside!";
    } else {
      return "It's hot outside!";
    }
  };
  const temp = check(temperature);
  return (
    <div>
      <p>{temp}</p>
    </div>
  );
};

export default Weather;
