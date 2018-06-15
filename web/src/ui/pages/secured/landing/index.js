import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    // Create a div with a class of container
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/challenges/pyramid"

    return (
      <div styleName="container">
        <h1>Challenges</h1>
        <ol>
          <li>
            <Link to="/challenges/pyramid">Pyramid Challenge</Link>
          </li>
        </ol>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))
