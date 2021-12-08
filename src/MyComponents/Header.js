import React from 'react'
import PropTypes from 'prop-types'
import exam from "./images/exam.png"
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-nav">
        <div
          className="container-fluid"
        >
          <Link
            className="navbar-brand text-primary" to="/"
          > <img
              src="https://to-do-cdn.microsoft.com/static-assets/c26cd0d92ec61ba2c661adefaa535ab3cc4fb124f347a850fded8034dad5d360/icons/welcome-left.png"
              
              height="400px"
              width="300px" />
          </Link>
          <h1 className="mt-5 text-white mname org">
            Organize
            <br />
            it all with Todos</h1>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}


Header.defaultProps = {
  title: "Your Title is here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}