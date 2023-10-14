import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (propertyItem) => {
    setAnchorEl(null);
    if (propertyItem) {
      setProperty(propertyItem);
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={<RiHome5Line className='dropdown-icon-primary' />}
      >
        {property}
        <RiArrowDownSLine className='dropdown-icon-secondary' />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {properties.map((propertyItem, index) => (
          <MenuItem
            key={index}
            onClick={() => handleClose(propertyItem)}
            sx={{ '&:hover': { color: '#7B16C1' } }}
          >
            {propertyItem}
          </MenuItem>

        ))}
      </Menu>
    </Box>
  );
};

export default PropertyDropdown;
