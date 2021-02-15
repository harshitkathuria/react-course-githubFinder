import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Function Component - Initially was used for stateless components (before introduction of hooks)
const UserItem = ({user: { login, avatar_url, html_url }}) => {
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{ width: '60px'}}/>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired 
}


// class UserItem extends Component {

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     id: "id",
//   //     login: "mojombo",
//   //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//   //     html_url: "https://github.com/mojombo"
//   //   }
//   // }

  // We can define state outside of constructor also 
//   // state = {
//   //   id: "id",
//   //   login: "mojombo",
//   //   avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//   //   html_url: "https://github.com/mojombo"
//   // }

//   render() {
//       const { login, avatar_url, html_url } = this.props.user;
//       return (
//         <div className="card text-center">
//           <img src={avatar_url} alt="" className="round-img" style={{ width: '60px'}}/>
//           <h3>{login}</h3>
//           <div>
//             <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
//           </div>
//         </div>
//       )
//   }
// }

export default UserItem;