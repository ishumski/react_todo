import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import List from './list';
import Lists from './Lists';
import PrivateRoute from './private-route';

function App() {
  // {!user ? <Login />: }

  return (

    <BrowserRouter>
      <div className="container">
        <Switch>

          <PrivateRoute path="/list/:id" component={List} />
          <PrivateRoute path="/" component={Lists} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
