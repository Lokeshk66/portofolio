
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057', 
      light: '#ff4081',
      contrastText: '#fff',
    },
    background: {
      default: '#f9f9fb',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h3: {
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 20,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
