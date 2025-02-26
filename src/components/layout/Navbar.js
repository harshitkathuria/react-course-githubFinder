import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Function Component
const Navbar = ({ icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

// class Navbar extends Component {

//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
//   }

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i className={this.props.icon} /> {this.props.title}
//         </h1>
//       </nav>
//     )
//   }
// }

export default Navbar;