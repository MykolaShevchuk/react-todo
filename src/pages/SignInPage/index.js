import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser, getCurrentUser} from "../../actions/userActions";

class SignInPage extends Component {
  componentDidUpdate() {
    if (this.props.user.email) {
      this.props.history.push('/');
    } else if (this.props.user.session) {
      this.props.getCurrentUser(this.props.user.session)
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: this.refs['email'].value,
      password: this.refs['password'].value
    };
    this.props.loginUser(user);
  }

  // facebookLogin() {
  //   window.open('http://localhost:3000/auth/facebook');
  // }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" defaultValue="708029@gmail.com" ref="email" className="form-control" id="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" defaultValue="111" ref="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = ({user}) => ({
  user: user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    getCurrentUser: (session) => dispatch(getCurrentUser(session))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
