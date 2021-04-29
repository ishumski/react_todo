import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lists from './Lists';
import List from './list';
function App() {
  return (


    <BrowserRouter>
      <div className="container">
        <Switch>
        <Route path="/lists/:id" component={List} />
          <Route path="/" component={Lists} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
