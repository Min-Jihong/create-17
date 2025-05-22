import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSession } from './SessionManager';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;