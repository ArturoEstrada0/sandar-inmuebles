import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

// Datos iniciales de las propiedades (sustituye con tus datos reales)
const initialProperties = [
  { id: 1, name: 'Propiedad 1', description: 'Descripción de Propiedad 1' },
  { id: 2, name: 'Propiedad 2', description: 'Descripción de Propiedad 2' },
  // Agrega más datos aquí...
];

function Properties() {
  const [properties, setProperties] = useState(initialProperties);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validationError, setValidationError] = useState('');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleOpenDialog = (property) => {
    setSelectedProperty(property);
    if (property) {
      setName(property.name);
      setDescription(property.description);
    } else {
      setName('');
      setDescription('');
    }
    setValidationError('');
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProperty(null);
  };

  const handleDeleteProperty = () => {
    const updatedProperties = properties.filter((property) => property.id !== selectedProperty.id);
    setProperties(updatedProperties);
    handleCloseDialog();
    setConfirmDialogOpen(false);
  };

  const handleSaveProperty = () => {
    if (!name || !description) {
      setValidationError('Nombre y descripción son campos obligatorios.');
      return;
    }

    if (selectedProperty) {
      // Actualizar propiedad existente
      const updatedProperties = properties.map((property) =>
        property.id === selectedProperty.id ? { ...property, name, description } : property
      );
      setProperties(updatedProperties);
    } else {
      // Crear nueva propiedad
      const newProperty = {
        id: properties.length + 1, // Generar un nuevo ID (puedes usar una lógica diferente)
        name,
        description,
      };
      setProperties([...properties, newProperty]);
    }

    setName('');
    setDescription('');
    handleCloseDialog();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Propiedades
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog(null)}
      >
        Agregar Propiedad
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.id}</TableCell>
                <TableCell>{property.name}</TableCell>
                <TableCell>{property.description}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenDialog(property)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setConfirmDialogOpen(true)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedProperty ? 'Editar Propiedad' : 'Agregar Propiedad'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedProperty ? 'Editar los detalles de la propiedad:' : 'Ingrese los detalles de la nueva propiedad:'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!validationError}
          />
          <TextField
            margin="dense"
            label="Descripción"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!validationError}
            helperText={validationError}
          />
        </DialogContent>
        <DialogActions>
          {selectedProperty && (
            <Button onClick={handleDeleteProperty} color="secondary">
              Eliminar
            </Button>
          )}
          <Button onClick={handleCloseDialog} color="default">
            Cancelar
          </Button>
          <Button onClick={handleSaveProperty} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
      >
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar esta propiedad?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)} color="default">
            Cancelar
          </Button>
          <Button onClick={handleDeleteProperty} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Properties;
