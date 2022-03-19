import React, { useEffect, useState } from "react";
import "./Countries.css"

const Countries = () => {
  const [country, setcountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountry(data));
  }, []);
  return (
    <div>
      <h1>Welcome to world tour</h1>
      <h1>Countries available: {country.length}</h1>
      <div className="countries-container">
      {
        country.map(countries => <Country name={countries.name.common} flag={countries.flags.png} population={countries.population} region={countries.subregion} capital={countries.capital}></Country>)
      }
      </div>
      
      
    </div>
  );
};

function Country(props) {
  return(
    <div className="countries">
    <h1>Name: {props.name}</h1>
    <img src={props.flag}></img>
    <h4>Region: {props.region}</h4>
    <h4>Capital: {props.capital}</h4>
    <h4>Population: {props.population}</h4>
    </div>
  )
  
}
export default Countries;
