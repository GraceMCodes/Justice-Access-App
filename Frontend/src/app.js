import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './register';
import Login from './login';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <h1>Justice Access App</h1>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
