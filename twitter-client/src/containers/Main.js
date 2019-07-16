import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";

const Main = props => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage { ...props} />} />
        <Route
          exact path="/signup"
          render={props => {
            return (
              <AuthForm
                onAuth={authUser}
                signUp
                buttonText="Sign up"
                heading="Join us today"
                {...props} />
            );
          }}
        />
        <Route
          onAuth={authUser}
          exact path="/signin"
          render={props => {
            return (
              <AuthForm buttonText="Log in" heading="Wellcome back" {...props} />
            );
          }}
        />
      </Switch>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));