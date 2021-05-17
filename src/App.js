import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Home = lazy(() => import('./pages/home'))
const Cars = lazy(() => import('./pages/cars'))
const Jobs = lazy(() => import('./pages/jobs'))
const Houses = lazy(() => import('./pages/houses'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route component={Home} />
          <Route path={ROUTES.CARS} component={Cars} />
          <Route path={ROUTES.HOUSES} component={Houses} />
          <Route path={ROUTES.JOBS} component={Jobs} />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
