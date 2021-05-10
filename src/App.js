import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/details/:id' component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
