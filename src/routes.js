import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    publicRoute: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    publicRoute: true,
  },
  {
    path: '*',
    component: () => <div>404 not found</div>,
    publicRoute: true,
  },
];

export default routes;
