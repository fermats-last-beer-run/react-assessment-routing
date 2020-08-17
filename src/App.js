import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome'
import Contact from './components/Contact';
import Clock from './components/Clock'
import NoMatch from './components/NoMatch'
import Navigation from './components/Navigation'


const App = () => {
  return (
    <div>
      {/* render the Navigation component */}
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render = { (props) => <Welcome {...props} name='Dylan' /> } 
        />
        <Route
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route>
          <NoMatch />
      </Route>
      </Switch>
    </div>
  );
}


export default App;
