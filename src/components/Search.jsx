import React from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Search() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />

      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          bgcolor: '#007bff', // Cambia el color de fondo del botón
          color: 'white', // Cambia el color del texto del botón
          '&:hover': {
            bgcolor: '#0056b3', // Cambia el color de fondo al pasar el ratón
          },
        }}
        startIcon={<SearchIcon sx={{ marginRight: 1 }} />}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default Search;
