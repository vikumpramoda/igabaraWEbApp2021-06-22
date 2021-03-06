import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault(); 
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const guestLinks = ( 
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="btn btn-danger" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-success" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    const authLinks = ( 
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=" "
            onClick={this.onLogoutClick.bind(this)} 
            className="nav-link"
          > 
           
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Admin Panel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* Check for which links are to be shown  */}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
      
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
