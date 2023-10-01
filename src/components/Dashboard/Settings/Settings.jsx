import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Slide, AppBar, Tabs, Tab } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const handleLogin = () => {
    // Agregar aquí la lógica de autenticación
    console.log('Iniciar sesión con Usuario:', username);
    console.log('Contraseña:', password);
  };

  const handleRegister = () => {
    // Agregar aquí la lógica de registro
    console.log('Registro de Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', width: '100%' }}>
        <AppBar position="static">
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered>
            <Tab label="Iniciar sesión" />
            <Tab label="Registrarse" />
          </Tabs>
        </AppBar>
        <Slide direction="up" in={showLoginForm} mountOnEnter unmountOnExit={false}>
          <div style={{ display: tabValue === 0 ? 'block' : 'none' }}>
            <Typography variant="h5" component="div" gutterBottom>
              Iniciar sesión
            </Typography>
            <TextField
              fullWidth
              label="Nombre de usuario"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <AccountCircle />
                ),
              }}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Lock />
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              style={{ marginTop: '10px' }}
            >
              Iniciar sesión
            </Button>
          </div>
        </Slide>
        <Slide direction="up" in={!showLoginForm} mountOnEnter unmountOnExit={false}>
          <div style={{ display: tabValue === 1 ? 'block' : 'none' }}>
            <Typography variant="h5" component="div" gutterBottom>
              Registrarse
            </Typography>
            <TextField
              fullWidth
              label="Nombre de usuario"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <AccountCircle />
                ),
              }}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Lock />
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleRegister}
              style={{ marginTop: '10px' }}
            >
              Registrarse
            </Button>
          </div>
        </Slide>
      </Paper>
    </div>
  );
};

export default Login;
