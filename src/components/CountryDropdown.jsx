import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { HouseContext } from './HouseContext';
import { useContext } from 'react';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (country) => {
    setAnchorEl(null);
    if (country) {
      setCountry(country);
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={<RiMapPinLine className='dropdown-icon-primary' />}
      >
        {country}
        <RiArrowDownSLine className='dropdown-icon-secondary' />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {countries.map((country, index) => (
          <MenuItem
            key={index}
            onClick={() => handleClose(country)}
            sx={{ '&:hover': { color: '#7B16C1' } }}
          >
            {country}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CountryDropdown;
