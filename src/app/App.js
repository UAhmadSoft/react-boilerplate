import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home';
import { useContext } from 'react';
import Dashboard from 'components/dashboard';
import Navbar from 'components/Navbar';
import Logout from '../components/Logout';
import RegistrationMain from 'components/RegistrationForm/Main';
import { AuthContext } from 'contexts/AuthContext';

const App = () => {
  const { token } = useContext(AuthContext);
  return (
    <div className='App'>
      {token ? (
        <>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/logout' component={Logout} />
          <Redirect to='/' />
        </>
      ) : (
        <>
          <Route component={Navbar} />
          <Switch>
            <Route
              exact
              path='/account'
              component={RegistrationMain}
            />
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
