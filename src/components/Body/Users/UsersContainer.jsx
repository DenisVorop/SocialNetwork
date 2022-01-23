import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFolowingProgress, toggleIsFetching, unfollow, getUsers, followSuccess, unfollowSuccess } from "../../../Redux/usersReducer"
import Users from "./Users"
import './Users.scss';
import React from 'react';
import { connect } from "react-redux"
import Preloader from "../../common/preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

//========================================================================================================================================================
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                usersData={this.props.usersData}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                unfollowSuccess={this.props.unfollowSuccess}
                followSuccess={this.props.followSuccess}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.stateUsersPage.usersData,
        pageSize: state.stateUsersPage.pageSize,
        totalUsersCount: state.stateUsersPage.totalUsersCount,
        currentPage: state.stateUsersPage.currentPage,
        isFetching: state.stateUsersPage.isFetching,
        followingInProgress: state.stateUsersPage.followingInProgress,
    }
}
let mapDispatchToProps = {
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFolowingProgress,
    getUsers,
    follow,
    unfollow,
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

//========================================================================================================================================================

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

//========================================================================================================================================================

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (usersData) => {
//             dispatch(setUsersActionCreator(usersData));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching));
//         },
//     }
// }
