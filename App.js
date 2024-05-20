import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CadastroReserva from './components/CadastroReserva';
import ListarVagas from './components/ListarVagas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Cadastro de Reserva</Link></li>
            <li><Link to="/listar-vagas">Listar Vagas</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={CadastroReserva} />
          <Route path="/listar-vagas" component={ListarVagas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
