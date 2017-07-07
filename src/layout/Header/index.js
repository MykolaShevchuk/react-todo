import React, {Component} from "react";
import "./index.css";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/userActions";
import http from "../../http";

class Header extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/signin');
  }

  render() {
    let sessionId = this.props.user.session ? this.props.user.session.id : null;
    let userId = this.props.user.session ? this.props.user.session.userId : null;
    return (
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Todo App</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {sessionId ? <p className="navbar-text">Email: {this.props.user.email}</p> : null}
              {sessionId ? <p className="navbar-text">UserID: {userId}</p> : null}
              {!sessionId ? <li><Link to="/signup">Sign Up</Link></li> : null}
              {!sessionId ? <li><Link to="/signin">Sign In</Link></li> : null}
              {sessionId ? <li><a href="/" onClick={(e) => this.logout(e)}>Logout</a></li> : null}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => http.post('users/logout')
      .then(() => dispatch(logoutUser()))
      .catch((e) => dispatch(logoutUser()))
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
