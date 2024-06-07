import React from 'react';
import ReactDOM from 'react-dom/client';
import { initMercadoPago } from '@mercadopago/sdk-react';
import App from './App';


import "./scss/styles.scss"

initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
