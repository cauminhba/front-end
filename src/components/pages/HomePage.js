import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BasePage from './BasePage';
import '../../App.css'
import {create, update, deleteMember, getAll} from '../../actions/member';
import MemberTable from './MemberTable';
import {NavBar} from './Header';
class HomePage extends BasePage {
    constructor(props) {
        super(props);
    }
    title() {
        return ('Home Page');
    }
    componentWillMount() {

    }
    componentWillUnmount() {

    }

    componentDidMount() {
        BasePage.prototype.componentDidMount.call(this);
        const companyId = localStorage.getItem("companyId");
        this.getAllMember(companyId, {});

    }
    componentWillReceiveProps(nextProps) {
        BasePage.prototype.componentWillReceiveProps.call(this, nextProps);
    }
    getAllMember(companyId, data) {
        this.props.dispatch(getAll(companyId, data));
    }

    delete = (id) => {
        const companyId = localStorage.getItem("companyId");
        this.props.dispatch(deleteMember(id));
        this.getAllMember(companyId);
    }

    render() {
        const {member: {members}} = this.props;

        return (
            <div className='page-wrapper'>
                <NavBar />
                {members &&
                    <MemberTable deleteEmployee={this.delete} listMember={members} />
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
        member: state.member,
    };
}

export default withRouter(connect(mapStateToProps)(HomePage))