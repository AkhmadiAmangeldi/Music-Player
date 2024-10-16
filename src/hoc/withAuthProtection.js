import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';


const withAuthProtection = (WrappedComponent) => {


  return (props) => {

    useEffect(() => {
      console.log(`${WrappedComponent.name} - рендер начался`);
      return () => {
        console.log(`${WrappedComponent.name} - рендер завершен`);
      };
    }, []);

    const { isAuthenticated } = props;

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;