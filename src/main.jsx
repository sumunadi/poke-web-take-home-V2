import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//register charts from chartjs
import {
  Chart,
  BarController,
  RadarController,
  BarElement, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale,
  Tooltip, Legend, Filler,
} from "chart.js";

Chart.register(
  BarController, RadarController,
  BarElement, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale,
  Tooltip, Legend, Filler
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
