import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClientList from './Pages/ClientList';
import ClientHome from './Pages/ClientHome';
import NewClient from './Pages/NewClient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ClientList }/>
          <Route exact path="/client/:clientId" component={ ClientHome } />
          <Route exact path="/clients/add-client" component={ NewClient } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
