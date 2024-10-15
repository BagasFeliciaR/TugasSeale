import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavList from './NavList'; // Adjust the path as needed
import NotHumble from './pages/felic'; // Example page component
import BleepingEasy from './pages/revanza'; // Example page component

function App() {
  return (
    <Router>
      <NavList />
      <Switch>
        <Route path="/felix" component={NotHumble} />
        <Route path="/revanza" component={BleepingEasy} />
      </Switch>
    </Router>
  );
}

export default App;
