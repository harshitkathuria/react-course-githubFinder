import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlertState] = useState(null)

  // Fired as soon as the component gets mounted(placed on DOM) -> for class based component
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: res.data, loading: false})
  // }

  // Search users from github API
  const searchUsers = async (text) => {
    // Spinner on before fetching
    setLoading(true)

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    // Spinner off before fetching
    setLoading(false)
    setUsers(res.data.items)
  }

  // Get single Github user
  const getUser = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setUser(res.data)
  }

  // Get User Repo
  const getUserRepos = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setRepos(res.data)
  }

  // Clear all users
  const clearUsers = () => {
    setLoading(false)
    setUsers([])
  }

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
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
        {/*Switch Components return only the first matched Route */}
        <Switch>
          <Route path="/" exact render={props => (
            <>
              <Alert alert={alert} />
              <Search searchUsers={searchUsers} clearUsers={clearUsers} 
                showClear={users.length > 0 ? true : false} setAlert={setAlert} />
              <Users loading={loading} users={users}/>
            </>
          )} />
          <Route path="/about" exact component={About} />
          <Route exact path="/user/:login" render={props => (
            <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading} />
          )} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;