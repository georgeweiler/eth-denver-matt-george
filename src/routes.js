import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Creator from './pages/Creator';

const NotFound = () => <div>404 not found</div>;

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
    path: '/profile',
    component: Profile,
    publicRoute: true,
  },
  {
    path: '/creator/*',
    component: Creator,
    exact: true,
    publicRoute: true,
  },
  {
    path: '*',
    component: NotFound,
    publicRoute: true,
  },
];

export default routes;
