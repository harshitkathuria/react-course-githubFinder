import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';

const User = ({ user, loading, match, repos, getUser, getUserRepos }) => {

  // componentDidMount() {
  //   this.props.getUser(this.props.match.params.login)
  //   this.props.getUserRepos(this.props.match.params.login)
  // }

  // UseEffect -> can be ued as an alternative to class lifecycle method
    // caleed called when the component is re-rendered(i.e when state or props are changed)

  useEffect(() => {
    // Without dependencies array it will result in infinte loop( for this specific case)
      // because when we call the props func by passing the arg, the 'User' component re-renders itself and then the useEffect hook is called again.
    // i.e PROP DRILLING WITHIN useEFFECT(without dependencies) CAUSES THE RE-RENDERING THUS INFINITE LOOP

    getUser(match.params.login)
    getUserRepos(match.params.login)
    // eslint-disable-next-line
  }, []) // Empty paranthesis([]) -> called on mounting and unmounting 

  const 
  { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = user;

  if(loading)
    return <Spinner />

  return (
    <>
      <Link to="/" className="btn btn-light">Back To Search</Link>
      Hireable: {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i> }

      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && 
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>}
          <a href={html_url} className="btn btn-dark my-1 ">Github Profile</a>
          <ul>
            <li>
              {login && <>
                <strong>Username: </strong>{login}
              </>}
            </li>
            <li>
              {company && <>
                <strong>Company: </strong>{company}
              </>}
            </li>
            <li>
              {blog && <>
                <strong>Website: </strong>{blog}
              </>}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  )
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
}

export default User