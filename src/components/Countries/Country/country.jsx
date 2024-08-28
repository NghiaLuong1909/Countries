import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles.css'
import Header from '../../Header/header'
import { Flex, Typography, View } from '@gapo_ui/components'
import { IconIc24FillArrowleft } from '@gapo_ui/icon'

const Country = () => {
  const [country, setCountry] = useState([])
  const {name} = useParams();

  const getCountry = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    setCountry(data);
  }
  useEffect(() => {
    getCountry();
  }, [name])
  return (
    <div>
      <Header />
      <View direction='column'>
        <button className='btn--back'>
          <Link to={'/'} className='link--back'>
            <Flex justifyContent='space-around' alignItems='center'>
              <IconIc24FillArrowleft UNSAFE_className='icon--back' />
              <Typography variant='bodyLarge' paddingEnd={12}>Back</Typography>
            </Flex>
          </Link>
        </button>
        {country.map((it) => {
          const {flags, name, population, region, subregion, capital, tld, languages, borders} = it
          return (
            <Flex 
              justifyContent='space-between' 
              alignItems='center' 
              UNSAFE_className='info--detail'
            >
                <img src={flags.png} alt={name} className='flag' />
                <View paddingStart={160} flex={1}>
                  <Typography variant="displayXLarge" paddingBottom={40}>
                    {name.common}
                  </Typography>
                  <Flex justifyContent='space-between'>
                    <View>
                      <Typography variant="headingMedium" paddingBottom={8}>Native name: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${name.official}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium" paddingBottom={8}>Population: 
                      <Typography variant="bodyMedium" elementType='span'>
                          {` ${population.toLocaleString()}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium" paddingBottom={8}>Region: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${region}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium" paddingBottom={8}>Sub region: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${subregion}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium" paddingBottom={8}>Capital: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${capital}`}
                        </Typography>
                      </Typography>
                    </View>
                    <View>
                      <Typography variant="headingMedium" paddingBottom={8}>Top lever domain: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${tld.toString()}`}
                        </Typography>
                      </Typography>
                      <Typography variant="headingMedium" paddingBottom={8}>Languages: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${Object.values(languages).join(', ')}`}
                        </Typography>
                      </Typography>
                      {borders && <Typography variant="headingMedium" paddingBottom={8}>Border Countries: 
                        <Typography variant="bodyMedium" elementType='span'>
                          {` ${Object.values(borders).join(', ')}`}
                        </Typography>
                      </Typography>}
                    </View>
                  </Flex>
                </View>
            </Flex>
          )
        })}
      </View>
    </div>
  )
}

export default Country
