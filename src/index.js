import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./App.scss";

const root = createRoot(document.getElementById('root'));
root.render(<App />);