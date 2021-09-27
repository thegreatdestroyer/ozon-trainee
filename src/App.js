import React from 'react';
import { ROUTES } from './constants/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        { ROUTES.map(({path, component}) => (
            <Route path={path} component={component}/>
      )) }
      </Switch>
      <Redirect to={{pathname: ROUTES[0].path}}/>
    </div>
  );
}

export default App;
