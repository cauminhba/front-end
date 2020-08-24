import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BasePage from './BasePage';
import {validDate,validEmail,validPhone} from '../../helper/helper';
import { Form, Grid, Header, Button } from 'semantic-ui-react';
import '../../App.css'
import {NavBar} from './Header';

class EditPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                name: '',
                email: '',
                password: '',
                mobile: '',
                gender: '',
                dob: '',
                emailOptIn: ''
            },
            validate: {
                name: true,
                email: true,
                password: true,
                gender: true,
                mobile: true,
                dob: true
            }
        }
    }
    handleInputChange = (e) => {
        let { member, validate } = this.state
        let { name, value } = e.target;
        member[name] = value;
        validate[name] = true;
        this.setState({
            member, validate
        })
    }

    handleRadioButton = (e, { value }) => {
        let { member, validate } = this.state
        member.gender = value;
        validate.gender = true;
        this.setState({ member, validate });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let { member, validate } = this.state;
        if (member.name === '') {
            validate.name = false;
        }
        if (member.password === '') {
            validate.password = false;
        }
        if (member.gender === '') {
            validate.gender = false;
        }
        if (!validEmail(member.email)) {
            validate.email = false;
        }
        if (!validPhone(member.mobile)) {
            validate.mobile = false;
        }
        if (!validDate(member.dob)) {
            validate.dob = false;
        }
        this.setState({ validate });
    }

    componentWillMount() {

    }
    componentWillUnmount() {

    }

    componentDidMount() {
        console.log('componentDidMount', this)
        BasePage.prototype.componentDidMount.call(this);
        let { member } = this.state;
        //fetch api
        this.setState({ member });
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', this, nextProps)
        BasePage.prototype.componentWillReceiveProps.call(this, nextProps);
    }

    render() {
        let { member, validate } = this.state;
        return (
            <div>
                 <NavBar />
                <Grid verticalAlign='middle' className='form-field'>
                    <Grid.Column className='form-input form-register'>
                        <Header as='h2' color='blue' textAlign='center'>
                            Edit Member
                        </Header>
                        <Form>
                            <Form.Field required>
                                <label>Name</label>
                                {validate.name ? null : <span className='error'>Name must not be empty</span>}
                                <Form.Input placeholder='Name' name='name' value={member.name} onChange={this.handleInputChange} />
                            </Form.Field>
                            <Form.Field >
                                <label>Email</label>
                                <Form.Input placeholder='Email Opt-in' name='emailOptIn' value={member.emailOptIn} onChange={this.handleInputChange} />
                            </Form.Field>
                            <Button color='blue' fluid size='large' onClick={this.onFormSubmit}>
                                Edit
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

export default withRouter(connect(mapStateToProps)(EditPage))