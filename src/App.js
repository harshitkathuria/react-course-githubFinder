import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import notFound from './components/pages/notFound';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {

  // Fired as soon as the component gets mounted(placed on DOM) -> for class based component
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: res.data, loading: false})
  // }

    /** Alternative for JSX 
    return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'GoodBye'));

    // Equivalent to 
    return (
      <div className="App">
        <h1>GoodBye</h1>
      </div>
    )
   */

  return (

    /* To return under emtpy tag, use 
      <React.Fragment></React.Fragment> OR
      <></>
    */
  <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            {/*Switch Components return only the first matched Route */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={notFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
  );
}

export default App;