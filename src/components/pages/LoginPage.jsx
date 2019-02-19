import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="LoginPage">
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
