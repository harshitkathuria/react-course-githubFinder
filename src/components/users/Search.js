import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

  // state = {
  //   text: ''
  // }
  const [text, setText] = useState('');

  // static propTypes = {
  //   searchUsers: PropTypes.func.isRequired,
  //   clearUsers: PropTypes.func.isRequired,
  //   showClear: PropTypes.bool.isRequired,
  //   setAlert: PropTypes.func.isRequired,
  // }

  // onChange = e => this.setState({ [e.target.name]: e.target.value });
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      // this.props.setAlert('Please enter something', 'light');
      setAlert('Please enter something', 'light');
    }
    else {
      // this.props.searchUsers(this.state.text);
      searchUsers(text);
      setText('');
    }
  }

  // render() {

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
        {
          showClear && 
          (<button className="btn btn-block btn-light" onClick={clearUsers}>Clear</button>)
        }
      </form>
    </div>
  )
}
// }

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default Search;