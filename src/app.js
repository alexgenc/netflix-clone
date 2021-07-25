import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

const App = () => {
  const { user } = useAuthListener();


  return (
    <Router>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}
          exact
        >
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}

export default App;