import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {

  const [alert, setAlertState] = useState(null)

  // Fired as soon as the component gets mounted(placed on DOM) -> for class based component
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: res.data, loading: false})
  // }

  // Set Alert when submit is pressed without entering name 
  const setAlert = (msg, type) => {
    setAlertState({ msg, type })
    setTimeout(() => { setAlertState(null) }, 3000)
  }

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
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          {/*Switch Components return only the first matched Route */}
          <Switch>
            <Route path="/" exact render={props => (
              <>
                <Alert alert={alert} />
                <Search setAlert={setAlert} />
                <Users />
              </>
            )} />
            <Route path="/about" exact component={About} />
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  </GithubState>
  );
}

export default App;