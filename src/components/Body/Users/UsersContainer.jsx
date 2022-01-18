import { connect } from "react-redux"
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator, } from "../../../Redux/usersReducer"
import Users from "./Users"

//========================================================================================================================================================

let mapStateToProps = (state) => {
    return {
        usersData: state.stateUsersPage.usersData,
        pageSize: state.stateUsersPage.pageSize,
        totalUsersCount: state.stateUsersPage.totalUsersCount,
        currentPage: state.stateUsersPage.currentPage,
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

//========================================================================================================================================================

export default UsersContainer;
