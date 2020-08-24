import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BasePage from './BasePage';
import { Form, Grid, Header, Button } from 'semantic-ui-react';
import {NavBar} from './Header';
import {validDate} from '../../helper/helper';
import {create} from '../../actions/member';
import '../../App.css'

class RegisterPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                firstName: '',
                surname: '',
                email: '',
                userName: '',
                password: ''
            },
            validate: {
                firstName: true,
                surName: true,
                email: true,
                userName: true,
                password: true
            }
        }
    }
    handleInputChange = (e) => {
        let { member, validate } = this.state
        let { name, value } = e.target;
        member[name] = value;

        console.log(`name: ${name}, value: ${value}`)
        this.setState({
            member, validate
        })
    }

    componentDidMount() {
        BasePage.prototype.componentDidMount.call(this);
    }
    componentWillReceiveProps(nextProps) {
        BasePage.prototype.componentWillReceiveProps.call(this, nextProps);
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        let { member, validate } = this.state;
        // if (member.name === '') {
        //     validate.name = false;
        // }
        // if (member.password === '') {
        //     validate.password = false;
        // }
        // if (member.email === '') {
        //     validate.email = false;
        // }
        // this.setState({ validate }, () =>{
        //     let {validate, member} = this.state
        //     if(validate.name && validate.password && validate.email && validate.gender && validate.mobileNumber && validate.dob)
        //     {
        //         console.log('xxxxxx', member)
        //         this.props.dispatch(create(member))
        //         // this.props.history.push('/home')
        //     }
        console.log(member)

        this.props.dispatch(create(member));
    }
    render() {
        let { member, validate } = this.state;
        return (
            <div>
                 <NavBar />
                <Grid verticalAlign='middle' className='form-field'>
                    <Grid.Column className='form-input form-register'>
                        <Header as='h2' color='blue' textAlign='center'>
                            Register Member
                        </Header>
                        <Form>
                            <Form.Field required>
                                <label>First Name</label>
                                <Form.Input placeholder='Name' name='firstName' onChange={this.handleInputChange} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Surname</label>
                                <Form.Input placeholder='Name' name='surname' onChange={this.handleInputChange} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Email</label>
                                <Form.Input placeholder='Email' name='email' onChange={this.handleInputChange} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Username</label>
                                <Form.Input placeholder='Username' name='username' onChange={this.handleInputChange} />
                            </Form.Field>
                            <Form.Field required>
                                <label>Password</label>
                                <Form.Input placeholder='Password' name='password' onChange={this.handleInputChange} />
                            </Form.Field>
                            <Button onClick={this.onFormSubmit} color='blue' fluid size='large'>
                                Register
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}

export default withRouter(connect(mapStateToProps)(RegisterPage))