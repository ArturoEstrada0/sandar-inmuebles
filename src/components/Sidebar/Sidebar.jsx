import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HouseIcon from '@mui/icons-material/House';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import FeedbackIcon from '@mui/icons-material/Feedback';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Drawer anchor="left" open={isOpen} variant="persistent">
        <div className="sidebar-content">
          <Typography variant="h5" className="sidebar-title">
            Sandar Inmuebles
          </Typography>
        
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              selected={currentPage === '/'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/analytics"
              selected={currentPage === '/analytics'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <EqualizerIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Analíticas" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/properties"
              selected={currentPage === '/properties'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <HouseIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Propiedades" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/properties/add"
              selected={currentPage === '/properties/add'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <AddCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Añadir Propiedades" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/properties/edit/:id"
              selected={currentPage.includes('/properties/edit')}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Editar Propiedades" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/properties/delete/:id"
              selected={currentPage.includes('/properties/delete')}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Eliminar Propiedades" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/properties/hide/:id"
              selected={currentPage.includes('/properties/hide')}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <VisibilityOffIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Ocultar Propiedades" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/settings"
              selected={currentPage === '/settings'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Configuración" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/user-guide"
              selected={currentPage === '/user-guide'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Manual de Usuario" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/feedback"
              selected={currentPage === '/feedback'}
              className="sidebar-item"
              classes={{ selected: 'sidebar-item-selected' }}
            >
              <ListItemIcon>
                <FeedbackIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Comentarios" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        {isOpen ? 'Cerrar' : 'Abrir'}
      </button>
    </div>
  );
}

export default Sidebar;
