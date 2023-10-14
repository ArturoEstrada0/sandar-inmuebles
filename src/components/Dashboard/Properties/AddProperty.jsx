import React, { useState } from 'react';
import {
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  KingBed as KingBedIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
  AttachMoney as AttachMoneyIcon,
  CameraAlt as CameraAltIcon,
  Photo as PhotoIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

function AddProperty({ properties, setProperties }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [images, setImages] = useState([]);
  const [garage, setGarage] = useState(false);
  const [garden, setGarden] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [securitySystem, setSecuritySystem] = useState(false);
  const [airConditioning, setAirConditioning] = useState(false);

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [additionalInstructions, setAdditionalInstructions] = useState('');

  const [validationError, setValidationError] = useState('');

  const handleAddProperty = () => {
    if (
      !name ||
      !description ||
      !type ||
      !bedrooms ||
      !bathrooms ||
      !size ||
      !price ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !country
    ) {
      setValidationError('Todos los campos son obligatorios.');
      return;
    }

    const newProperty = {
      id: properties.length + 1,
      name,
      description,
      type,
      bedrooms,
      bathrooms,
      size,
      price,
      mainImage,
      images,
      garage,
      garden,
      swimmingPool,
      balcony,
      furnished,
      securitySystem,
      airConditioning,
      location: {
        address,
        city,
        state,
        zipCode,
        country,
        coordinates: {
          latitude,
          longitude,
        },
      },
      additionalInstructions,
    };

    setProperties([...properties, newProperty]);

    // Restablecer todos los campos a su valor inicial
    setName('');
    setDescription('');
    setType('');
    setBedrooms('');
    setBathrooms('');
    setSize('');
    setPrice('');
    setMainImage('');
    setImages([]);
    setGarage(false);
    setGarden(false);
    setSwimmingPool(false);
    setBalcony(false);
    setFurnished(false);
    setSecuritySystem(false);
    setAirConditioning(false);
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    setCountry('');
    setLatitude('');
    setLongitude('');
    setAdditionalInstructions('');
    setValidationError('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMainImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = () => {
    if (mainImage) {
      setImages([...images, mainImage]);
      setMainImage('');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Agregar Propiedad
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            label="Descripción"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth margin="dense">
            <InputLabel>Tipo</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              error={!!validationError}
            >
              <MenuItem value="Casa">Casa</MenuItem>
              <MenuItem value="Apartamento">Apartamento</MenuItem>
              <MenuItem value="Condominio">Condominio</MenuItem>
              <MenuItem value="Terreno">Terreno</MenuItem>
              <MenuItem value="Local Comercial">Local Comercial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            margin="dense"
            label="Dormitorios"
            fullWidth
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KingBedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            margin="dense"
            label="Baños"
            fullWidth
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BathtubIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            margin="dense"
            label="Tamaño (metros cuadrados)"
            fullWidth
            value={size}
            onChange={(e) => setSize(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SquareFootIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            margin="dense"
            label="Precio"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="file"
            margin="dense"
            fullWidth
            onChange={handleImageUpload}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CameraAltIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            onClick={handleAddImage}
            disabled={!mainImage}
            startIcon={<PhotoIcon />}
          >
            Agregar Imagen
          </Button>
        </Grid>
        {images.map((image, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
            <IconButton
              color="secondary"
              onClick={() => handleRemoveImage(index)}
            >
              <CancelIcon />
            </IconButton>
          </Grid>
        ))}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={garage}
                onChange={(e) => setGarage(e.target.checked)}
                name="garage"
                color="primary"
              />
            }
            label="Garaje"
          />
          <FormControlLabel
            control={
              <Switch
                checked={garden}
                onChange={(e) => setGarden(e.target.checked)}
                name="garden"
                color="primary"
              />
            }
            label="Jardín"
          />
          <FormControlLabel
            control={
              <Switch
                checked={swimmingPool}
                onChange={(e) => setSwimmingPool(e.target.checked)}
                name="swimmingPool"
                color="primary"
              />
            }
            label="Piscina"
          />
          <FormControlLabel
            control={
              <Switch
                checked={balcony}
                onChange={(e) => setBalcony(e.target.checked)}
                name="balcony"
                color="primary"
              />
            }
            label="Balcón"
          />
          <FormControlLabel
            control={
              <Switch
                checked={furnished}
                onChange={(e) => setFurnished(e.target.checked)}
                name="furnished"
                color="primary"
              />
            }
            label="Amueblado"
          />
          <FormControlLabel
            control={
              <Switch
                checked={securitySystem}
                onChange={(e) => setSecuritySystem(e.target.checked)}
                name="securitySystem"
                color="primary"
              />
            }
            label="Sistema de Seguridad"
          />
          <FormControlLabel
            control={
              <Switch
                checked={airConditioning}
                onChange={(e) => setAirConditioning(e.target.checked)}
                name="airConditioning"
                color="primary"
              />
            }
            label="Aire Acondicionado"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            label="Dirección"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            label="Ciudad"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            label="Estado/Provincia"
            fullWidth
            value={state}
            onChange={(e) => setState(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            label="Código Postal"
            fullWidth
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            label="País"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            margin="dense"
            label="Latitud"
            fullWidth
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            margin="dense"
            label="Longitud"
            fullWidth
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            error={!!validationError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            label="Instrucciones Adicionales"
            fullWidth
            multiline
            rows={4}
            value={additionalInstructions}
            onChange={(e) => setAdditionalInstructions(e.target.value)}
          />
        </Grid>
      </Grid>
      {validationError && (
        <Typography color="error" gutterBottom>
          {validationError}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddProperty}
        startIcon={<CheckCircleIcon />}
      >
        Agregar Propiedad
      </Button>
    </Container>
  );
}

export default AddProperty;
