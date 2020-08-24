import { Component } from 'react';

class BasePage extends Component {

    constructor(props) {
        super();

        this.state = {
            tokenCheckInterval: null
        };
    }
    componentDidMount() {
        if (localStorage.token && this.props.auth.isLoggedIn && !this.props.auth.fetching) {
        }else if(!localStorage.token && this.props.location.pathname !== '/'){
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        // Detect if user needs to be logged out
        if (!localStorage.token && !nextProps.auth.isLoggedIn && !nextProps.auth.fetching && this.props.location.pathname !== '/') {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
    }

}

export default BasePage;