import React, { FC, StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from 'src/pages/login';
import Chat from 'src/pages/Chatroom';
import { Skeleton } from 'antd';

// const Login = lazy(() => import('src/pages/login'));

const RouteProvider: FC = () => {
  return (
    <BrowserRouter>
      <StrictMode>
        {/* <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/chatroom" component={() => 'chatroom'} />
            <Route path="*" component={() => <div>not found</div>} />
          </Switch>
        </Suspense> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/chatroom" component={Chat} />
          <Route path="*" component={() => <div>not found</div>} />
        </Switch>
      </StrictMode>
    </BrowserRouter>
  );
};

export default RouteProvider;
