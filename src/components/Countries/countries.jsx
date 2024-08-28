import { Typography, View } from "@gapo_ui/components";
import React from "react";
import { useEffect, useContext } from "react";
import './styles.css'
import { Link } from "react-router-dom";
import { countryContext } from "../Context/context";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const {country, setCountry} = useContext(countryContext)
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      {
        <View UNSAFE_className="grid">
          {country.map((country) => {
            const { cca3, name, population, region, capital, flags } = country;
            return (
              <Link to={`/${name.common}`} className="link--country">
                <article key={cca3}>
                  <View>
                    <img src={flags.png} alt={name} />
                    <View UNSAFE_className="details">
                      <Typography variant="headingXLarge" paddingBottom={8}>
                        {name.common}
                      </Typography>
                      <Typography variant="headingMedium">Population: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${population.toLocaleString()}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium">Region: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${region}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium">Capital: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${capital}`}
                        </Typography>
                      </Typography>
                    </View>
                  </View>
                </article>
              </Link>
            )
          })}
        </View>
      }
    </>
  );
};

export default Countries;
