import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdateRestaurantPage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id/update" component={UpdatePage} />
          <Route
            exact
            path="/restaurants/:id"
            component={RestaurantDetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
