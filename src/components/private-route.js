import React from 'react';
import { Route } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);
export default PrivateRoute;
