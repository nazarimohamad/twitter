import React, { Component } from "react";


export default class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    }
  }

 handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
 };


 handleSubmite = e => {
   e.preventDefault();
  const authType = this.props.signUp ? "signup" : "signin"
  this.props.onAuth(authType, this.state)
    .then(() => {
    this.props.history.push("/");
  })
    .catch(() => {
      return;
    });

 };

  render() {
    const { email, username, profileImageUrl } = this.state;
    const { buttonText, heading, signUp, errors, history, removeError } = this.props

    history.listen(() => {
      removeError();
    });

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmite}>
              <h2>{heading}</h2>
              {errors.message &&
                <div className="alert alert-danger">
                  {errors.message}
                </div>}
              <lable htmlFor="email">Email:</lable>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                type="text"
              />
              <lable htmlFor="password">password:</lable>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
              />
              {signUp && (
                <div>
                  <lable htmlFor="username">username:</lable>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    type="text"
                  />
                  <lable htmlFor="profileImageUrl">image-url:</lable>
                  <input
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    type="text"
                    value={profileImageUrl}
                  />
                </div>
              )}
              <button type="submit" className="btn btn-primary btn-block btn-lg">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

}