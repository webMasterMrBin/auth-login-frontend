import React, { FC } from 'react';
// import RouteProvider from './RouteProvider';
import SwrProvider from './SwrProvider';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorProvider from './ErrorProvider';
// import { Demo } from 'src/pages/demo';
import { Login } from 'src/pages/login';
import '../styles/index.css';

const App: FC = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorProvider}>
      <SwrProvider>
        <Login />
      </SwrProvider>
    </ErrorBoundary>
  );
};

export default App;
