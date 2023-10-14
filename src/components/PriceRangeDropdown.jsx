import React, { useContext, useState } from "react";
import { RiWallet3Line, RiArrowDownSLine } from "react-icons/ri";
import { Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { HouseContext } from './HouseContext';
import './PriceRangeDropdown.css'; // Importa el archivo CSS

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const prices = [
    {
      value: 'Price Range (Any)',
    },
    {
      value: '100,000 - 130,000',
    },
    {
      value: '130,000 - 160,000',
    },
    {
      value: '150,000 - 190,000',
    },
    {
      value: '190,000 - 220,000',
    },
    {
      value: '10,000 - 30,000',
    },
    {
      value: '30,000 - 40,000',
    }
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedPrice) => {
    setAnchorEl(null);
    if (selectedPrice) {
      setPrice(selectedPrice);
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={<RiWallet3Line className='dropdown-icon-primary' />}
        className="custom-button" // Agrega una clase personalizada
      >
        {price}
        <RiArrowDownSLine className='dropdown-icon-secondary' />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        {prices.map((priceOption, index) => (
          <MenuItem
            key={index}
            onClick={() => handleClose(priceOption.value)}
            className="custom-menu-item" // Agrega una clase personalizada
          >
            {priceOption.value}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default PriceRangeDropdown;
