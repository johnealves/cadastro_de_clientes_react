import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClientList from './Pages/ClientList';
import ClientHome from './Pages/ClientHome';
import NewClient from './Pages/NewClient';
import NewAddress from './Pages/newAddress';
import UpdateClient from './Pages/UpdateClient.js';
import UpdateAddress from './Pages/UpdateAddress';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ClientList }/>
          <Route exact path="/client/:clientId" component={ ClientHome } />
          <Route exact path="/client/:clientId/add-address" component={ NewAddress } />
          <Route exact path="/client/:clientId/update-address/:addressId" component={ UpdateAddress } />
          <Route exact path="/clients/add-client" component={ NewClient } />
          <Route exact path="/client/:clientId/update" component={ UpdateClient } />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
