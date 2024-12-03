import React from 'react';
import { Navigate } from 'react-router-dom';

export const withAuthProtection = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = props;

    // Если пользователь не авторизован, перенаправляем на страницу логина
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};
