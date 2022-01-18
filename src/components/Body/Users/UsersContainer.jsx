import { connect } from "react-redux"
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator, } from "../../../Redux/usersReducer"
import Users from "./Users"
import './Users.scss';
import axios from 'axios';
import React from 'react';

//========================================================================================================================================================

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count={this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count={this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render() {
        return <Users
            usersData={this.props.usersData}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
