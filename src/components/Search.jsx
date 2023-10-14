import React from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Search = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      boxShadow={3}
      borderRadius={8}
      bgcolor="#fff"
    >
      <Box
        display="flex"
        justifyContent="space-between" /* Coloca los componentes en una sola fila */
        width="100%" /* Ocupa todo el ancho disponible */
        padding={2}
      >
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
      </Box>

      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          bgcolor: '#007bff',
          color: 'white',
          '&:hover': {
            bgcolor: '#0056b3',
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
