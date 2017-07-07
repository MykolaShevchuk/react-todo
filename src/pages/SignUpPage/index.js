import React, {Component} from "react";
import {connect} from "react-redux";
import {registerUser} from "../../actions/userActions";

export class SignUpPage extends Component {
  handleSubmit(event) {
    event.preventDefault();
    if (this.checkIfFormValid()) {
      const user = {
        email: this.refs['email'].value,
        password: this.refs['password'].value
      };
      this.props.registerUser(user);
      this.props.history.push('/signin')
    } else {
      alert("Form is not valid")
    }
  }

  checkIfFormValid() {
    return this.refs['email'].value && this.refs['password'].value && this.refs['re-password'].value
      && this.refs['password'].value === this.refs['re-password'].value
  }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="text" ref="email" className="form-control" id="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" ref="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="re-password">Re-password</label>
            <input type="password" ref="re-password" className="form-control" id="re-password" placeholder="Re-password"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // items: state.itemsReducer,
    // sections: state.sectionsReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
