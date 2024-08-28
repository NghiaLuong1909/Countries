import { Flex, Typography, View } from '@gapo_ui/components'
import React, { useContext, useEffect } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { countryContext } from "../Context/context";

const Header = () => {
  const {setCountry} = useContext(countryContext)
  const fetchCountryData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountry(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <View UNSAFE_className='header'>
      <Link to={'/'} className='link--logo' onClick={fetchCountryData}>
        <Typography variant='displayLarge'>Where in the world?</Typography>
      </Link>
    </View>
  )
}

export default Header
