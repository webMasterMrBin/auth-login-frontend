import React from 'react';
import { createRoot } from 'react-dom/client';
// import { worker } from 'Mocks/browser';
import App from './providers';

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

const root = createRoot(document.getElementById('root'));
root.render(<App />);
