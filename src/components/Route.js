import React from 'react';
import { Route as DomRoute } from 'react-router-dom';

const Route = ({ component: Component, componentProps, path, ...rest }) => {
  const render = (props) => <Component {...props} {...componentProps} />;
  return <DomRoute {...rest} render={render} />;
};

export default Route;
