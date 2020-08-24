import {
    MemberActionType
} from '../actions/actionsTypes'
const initialState = require("./initialstate.json").member;

const member = (state = initialState, action) => {

    switch (action.type) {
        case MemberActionType.FETCH_MEMBER_LIST_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                isLoggedIn: true,
                members: action.payload
            };
        }

        case MemberActionType.FETCH_MEMBER_DETAIL_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                isLoggedIn: false,
                member: action.payload
            };
        }

        case MemberActionType.DELETE_MEMBER_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                isLoggedIn: true,
                members: state.members.filter(m => m.employeeId !== action.payload.memberId)
            };
        }

        default: {
            return state;
        }
    }

}

export default member;