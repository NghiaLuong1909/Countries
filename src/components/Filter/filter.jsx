import { Flex } from '@gapo_ui/components'
import React, { useState, useContext } from 'react'
import './styles.css'
import { regions } from '../constants'
import { countryContext } from '../Context/context'

const Filter = () => {
  const {setCountry} = useContext(countryContext)
  const [valueSearch, setValueSearch] = useState("")

  const searchCountry = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${valueSearch}`)
    const data = await res.json()
    setCountry(data)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    searchCountry()
  }

  const filterByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    setCountry(data)
  }
  const handleFilterByRegion = (e) => {
    e.preventDefault();
    filterByRegion();
  }
  return (
    <Flex UNSAFE_className='container--filter' justifyContent='space-between' alignItems='center'>
      <form onSubmit={handleSearch}>
        <input 
          type='text' 
          value={valueSearch} 
          onChange={(e) => setValueSearch(e.target.value)}
          name='search' 
          id='search' 
          placeholder='Search for a country...' 
          required 
          className='input--serach' 
        />
      </form>
      
      <form onSubmit={handleFilterByRegion}>
        <select 
          name='filter-by-region' 
          id='filter-by-region' 
          className='list--regions'
          value={regions.name}
          onChange={e => filterByRegion(e.target.value)}
        >
          {regions.map((region, index) => {
            return (
              <option key={index}>{region.name}</option>
            )
          })}
        </select>
      </form>
    </Flex>
  )
}

export default Filter
