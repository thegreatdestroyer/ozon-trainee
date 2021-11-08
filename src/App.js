import React from 'react';
import { Provider } from 'react-redux';
import { ROUTES } from './constants/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import { store } from './store';
import './App.css';

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Switch>
        { ROUTES.map(({path, component}) => (
            <Route path={path} component={component}/>
      )) }
      </Switch>
      <Redirect to={{pathname: ROUTES[0].path}}/>
    </div>
    </Provider>
  );
}

export default App;
