import React from 'react';
import './Dashboard.css';
import Analytics from './Analitics/Analitycs';
import DailyVisitsChart from './Analitics/DailyVisitsChart';
import MessageSentChart from './Analitics/MessageSentChart';
import PropertyMetricsChart from './Analitics/PropertyMetricsChart';
import SectionVisitsChart from './Analitics/SectionVisitsChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const dailyVisitsData = [
  { date: '2023-09-01', visits: 120 },
  { date: '2023-09-02', visits: 145 },
  { date: '2023-09-03', visits: 110 },
  { date: '2023-09-04', visits: 180 },
  { date: '2023-09-05', visits: 200 },
  // Agrega más datos aquí...
];
const sectionVisitsData = [
  { section: 'Inicio', visits: 350 },
  { section: 'Propiedades', visits: 220 },
  { section: 'Configuración', visits: 80 },
  { section: 'Guía del Usuario', visits: 150 },
  { section: 'Enviar Comentarios', visits: 50 },
  // Agrega más datos aquí...
];
const messageSentData = [
  { name: 'Usuario 1', count: 25 },
  { name: 'Usuario 2', count: 40 },
  { name: 'Usuario 3', count: 10 },
  // Agrega más datos aquí...
];
const propertyMetricsData = [
  { property: 'Propiedad 1', visits: 120, interactions: 50 },
  { property: 'Propiedad 2', visits: 80, interactions: 30 },
  { property: 'Propiedad 3', visits: 200, interactions: 90 },
  // Agrega más datos aquí...
];

function Dashboard() {
  return (
    <Box className="dashboard">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Bienvenido al panel de control de Sandar Inmuebles.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardHeader title="Visitas Diarias" />
            <Divider />
            <CardContent>
              <DailyVisitsChart data={dailyVisitsData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardHeader title="Visitas por Sección" />
            <Divider />
            <CardContent>
              <SectionVisitsChart data={sectionVisitsData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardHeader title="Mensajes Enviados" />
            <Divider />
            <CardContent>
              <MessageSentChart data={messageSentData} />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardHeader title="Métricas de Propiedades" />
            <Divider />
            <CardContent>
              <PropertyMetricsChart data={propertyMetricsData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
