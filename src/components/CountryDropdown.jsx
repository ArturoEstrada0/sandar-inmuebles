import React, { useState, useEffect, useContext } from 'react'

//import icons
import {
  RiMapPinLine, RiArrowDownSLine,
  RiArrowUpLine
} from 'react-icons/ri'

//import headless ui
import { Menu } from '@headlessui/react'

//import house context
import { HouseContext } from '.HouseContext'

const CountryDropdown = () => {

  const { country, setCountry, countries } =
    useContext(HouseContext)

    console.log(country)
  return
  <div>CountryDropdown</div>

}

export default CountryDropdown