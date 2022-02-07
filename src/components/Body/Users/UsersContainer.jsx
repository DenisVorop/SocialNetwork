import { follow, toggleFolowingProgress, toggleIsFetching, unfollow, getUsers } from "../../../Redux/usersReducer.ts"
import Users from "./Users"
import './Users.scss';
import React from 'react';
import { connect } from "react-redux"
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersData } from "../../../Redux/users-selectors.ts";

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
            {this.props.isFetching
                ? <Preloader />
                : <Users
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
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
let mapDispatchToProps = {
    toggleIsFetching,
    toggleFolowingProgress,
    getUsers,
    follow,
    unfollow,
}

//========================================================================================================================================================

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer);

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
