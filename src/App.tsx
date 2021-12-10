import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from 'layout';
import './App.css';
import Login from 'pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={false} path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
