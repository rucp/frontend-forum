import React from 'react';
import Routering from './routes';
import UserServices from '../Services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({ children }) => {
  console.log('Children', children);
  const userAuthenticated = userService.userAuthenticated();
  return userAuthenticated ? children : <Routering />;
};

export default ProtectedRoutes;
