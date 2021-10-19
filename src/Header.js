import React from "react";
import { connect } from 'react-redux';

function Header({ userName }) {
  return <div>
    <h1>Hello, {userName}</h1>
    <p>Now you have these pretty things:</p>
  </div>
}

export default connect((state) => {
  return {
    userName: state.user.name,
  }
})(Header);