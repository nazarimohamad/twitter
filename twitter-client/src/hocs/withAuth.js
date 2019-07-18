import React, { Component } from "react";
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    componentWillMount() {
      if (this.props.isAutheticated === false) {
        this.props.history.push("/signin");
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isAutheticated === false) {
        this.props.history.push("/signin");
      }
    }
    render() {
      return <ComponentToBeRendered {...this.props} />
    }
  }

function mapStateToProps(state) {
    return {
      isAutheticated: state.currentUser.isAutheticated
    }
  }

  return connect(mapStateToProps)(Authenticate);
}