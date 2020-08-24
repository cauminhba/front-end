import React, {Component} from 'react';
import {Switch, Route, withRouter,} from 'react-router-dom';
import {IntlProvider} from "react-intl";
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import HomePage from './components/pages/HomePage';
import EditPage from './components/pages/EditPage';
import RegisterPage from './components/pages/RegisterPage';
import {connect} from "react-redux";
class App extends Component {

  render() {
      const token = localStorage.token;
      return (
          <IntlProvider locale={'en'}>
              <Switch>
                  <Route exact path="/" component={token ? HomePage : LoginPage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/home" component={HomePage}/>
                  <Route path="/edit-member" component={EditPage}/>
                  <Route path="/add-member" component={RegisterPage}/>
                  <Route path="/404" component={NotFoundPage}/>
                  <Route path="*" component={NotFoundPage}/>
              </Switch>
          </IntlProvider>
      );
  }
}

App.propTypes= {
  // lang : PropTypes.string.isRequired
};

function mapStatetoProps(state) {
  return{
      // lang: state.locale.lang
  }
}

export default withRouter(connect(mapStatetoProps)(App));
