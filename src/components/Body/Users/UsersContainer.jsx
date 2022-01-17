import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator,  } from "../../../Redux/usersReducer"
import Users from "./Users"

//========================================================================================================================================================

let mapStateToProps = (state) => {
    return {
        usersData: state.stateUsersPage.usersData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (usersData) => {
            dispatch(setUsersActionCreator(usersData));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

//========================================================================================================================================================

export default UsersContainer;
