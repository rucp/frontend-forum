import React from 'react';
import { Routering } from './routes';
import UserServices from '../Services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({ children }) => {

  const userAuthenticated = userService.isAuthenticated();
  return userAuthenticated ? children : <Routering />;
};

export default ProtectedRoutes;
