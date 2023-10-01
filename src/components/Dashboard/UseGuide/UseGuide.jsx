import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
} from '@mui/material';

const propertyData = [
  {
    id: 1,
    title: 'Hermosa casa en el campo',
    description: 'Una casa espaciosa en un entorno tranquilo con vistas panorámicas.',
    price: '$300,000',
    whitelist: ['Familias', 'Mascotas'],
  },
  {
    id: 2,
    title: 'Apartamento moderno en la ciudad',
    description: 'Un apartamento de lujo en el corazón de la ciudad con todas las comodidades.',
    price: '$200,000',
    whitelist: ['Solteros', 'Parejas'],
  },
  {
    id: 3,
    title: 'Casa adosada junto a la playa',
    description: 'Una casa adosada con acceso directo a la playa y vistas al mar.',
    price: '$500,000',
    whitelist: ['Familias', 'Mascotas', 'Amantes de la playa'],
  },
  {
    id: 4,
    title: 'Piso con vistas a la montaña',
    description: 'Un piso acogedor con vistas espectaculares a las montañas.',
    price: '$150,000',
    whitelist: ['Amantes de la naturaleza'],
  },
];

const PropertyList = () => {
  const chipStyles = {
    margin: '2px',
  };

  return (
    <Grid container spacing={2}>
      {propertyData.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                {property.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {property.description}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {property.price}
              </Typography>
              <div>
                {property.whitelist.map((item) => (
                  <Chip key={item} label={item} style={chipStyles} color="primary" />
                ))}
              </div>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Ver detalles
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyList;
