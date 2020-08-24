import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

class NotFound extends Component {
  render() {
    return(
      <Grid>
        <h1>Page not found.</h1>
        <Link to="/home" className="btn">Home</Link>
      </Grid>
    );
  }
}

export default NotFound;