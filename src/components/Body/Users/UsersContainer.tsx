// @ts-ignore
import { follow, unfollow, getUsers } from "../../../Redux/usersReducer.ts"// @ts-ignore
import Users from "./Users.tsx"
import './Users.scss';
import React from 'react';
import { connect } from "react-redux"
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux"; // @ts-ignore
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersData, getUsersFilter } from "../../../Redux/users-selectors.ts";
import { UsersDataType } from '../../../types/Types';
import { AppStateType } from "../../../Redux/redux-store";
import { FilterType } from "../../../Redux/usersReducer";

//========================================================================================================================================================
type MapStatePropsType = {
    usersData: Array<UsersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
    filter: FilterType,
}

type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void,
}

type OwnPropsType = {
    // from attribute
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        const { currentPage, pageSize, filter } = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize, filter } = this.props;
        this.props.getUsers(pageNumber, pageSize, filter);
    }

    onFilterChanged = (filter: FilterType) => {
        const { pageSize } = this.props;
        this.props.getUsers(1, pageSize, filter);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    usersData={this.props.usersData}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    onFilterChanged={this.onFilterChanged}
                />
            }
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state),
    }
}

let mapDispatchToProps: MapDispatchPropsType = {
    getUsers,
    follow,
    unfollow,
}

//========================================================================================================================================================

export default compose(
    withAuthRedirect,
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps),
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
