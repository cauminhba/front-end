import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {injectIntl} from 'react-intl';
import {login} from '../../actions/auth';
import '../../App.css'
import { Form, Grid, Header, Button } from 'semantic-ui-react';

class LoginPage extends Component {

    constructor(props) {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.login = this.login.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        // this.login()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isLoggedIn) {
            this.props.history.push('/home');
        }
    }

    handleChange = (e) => {
        let keyValuePair = {};
        let { name, value } = e.target;
        keyValuePair[name] = value;
        this.setState(keyValuePair);
    }

    login() {
        let loginData = {
            password: this.state.password,
            username: this.state.username
        };
        this.props.dispatch(login(loginData));
    }

    render() {
        let {auth} = this.props;
        return (
            <Grid textAlign='center' verticalAlign='middle' className='form-field'>
                <Grid.Column className='form-input'>
                    <Header as='h2' color='blue' textAlign='center'>
                        Login to your account
                    </Header>
                    <Form size='large'>
                        <Form.Input value={this.state.username} onChange={this.handleChange} name = "username" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            value={this.state.password}
                            onChange={this.handleChange}
                            name = "password"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button onClick={this.login} disabled={auth.fetching} color='blue' fluid size='large'>
                            Login
                        </Button>
                        <Link to={'/register'} variant='body2'>
                            {"Don't have an account? Register now!"}
                        </Link>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         // actions: bindActionCreators(authActions, dispatch)
//     };
// };

export default injectIntl(withRouter(connect(mapStateToProps)(LoginPage)))