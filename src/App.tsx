import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from 'layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={false} path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
