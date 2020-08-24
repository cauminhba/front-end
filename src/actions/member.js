import MemberApis from '../apis/member';
import {
    MemberActionType
} from './actionsTypes'

export function create(data) {
    return (dispatch, getState) => {
        console.log('sfdfdfdsfddsfsd', data)
        MemberApis.create(data)
            .then(response => {
                console.log("create member" + JSON.stringify(response));
                if(response.type === "success") {
                    this.props.history.push('/home');
                }
            })
            .catch(err => {
                console.log("create member failed" + JSON.stringify(err));
            })
    }
}

export function update(data) {
    return (dispatch, getState) => {
        MemberApis.update(data)
            .then(response => {
                console.log("update member" + JSON.stringify(response));
                if(response.type === "success") {
                    this.props.history.push('/home');
                }
            })
            .catch(err => {
                console.log("update create member failed" + JSON.stringify(err));
            })
    }
}
export function deleteMember (data) {
    return (dispatch, getState) => {
        MemberApis.deleteMember(data)
            .then(response => {
                console.log("delete member" + JSON.stringify(response));
                if(response.type === "success") {
                    console.log("delete member succesfully");
                    dispatch({type: MemberActionType.DELETE_MEMBER_SUCCESS, payload: {
                        memberId: data
                    }});
                }
            })
            .catch(err => {
                console.log("delete member failed" + JSON.stringify(err));
            })
    }
}

export function getAll (companyId, data) {
    return (dispatch, getState) => {
        MemberApis.getAllByCompany(companyId, data)
            .then(response => {
                console.log("getAll ret data" + JSON.stringify(response));
                if(response.type === "success") {
                    dispatch({type: MemberActionType.FETCH_MEMBER_LIST_SUCCESS, payload: response.data});
                }
            })
            .catch(err => {
                console.log("delete member failed" + JSON.stringify(err));
            })
    }
}

export function getMember (data) {
    return (dispatch, getState) => {
        MemberApis.getMemberDetail(data)
            .then(response => {
                console.log("get member" + JSON.stringify(response));
                if(response.type === "success") {
                    console.log("get member succesfully")
                }
            })
            .catch(err => {
                console.log("get member failed" + JSON.stringify(err));
            })
    }
}