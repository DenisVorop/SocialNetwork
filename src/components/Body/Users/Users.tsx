// @ts-ignore
import userPhoto from '../../../assets/images/user.svg';
import Preloader from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';// @ts-ignore
import Paginator from '../../common/Paginator/Paginator.tsx';// @ts-ignore
import ui from '../../../scss/ui.module.scss';// @ts-ignore
import { UsersDataType } from './../types/Types';// @ts-ignore
import UsersSearchForm from './UsersSearchForm.tsx';// @ts-ignore
import { FilterType, getUsers, follow, unfollow } from '../../../Redux/usersReducer.ts';
import { useDispatch, useSelector } from 'react-redux';// @ts-ignore
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsersData, getUsersFilter } from "../../../Redux/users-selectors.ts";
//@ts-ignore
// import {FilterType, getUsers, follow, unfollow} from '../../../Redux/usersReducer.ts'
// import { follow as followT } from '../../../Redux/usersReducer.ts'

//========================================================================================================================================================

type UsersPropsType = {
    isFetching: boolean,
}

export const Users: React.FC<UsersPropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter: FilterType = useSelector(getUsersFilter);
    const usersData: UsersDataType = useSelector(getUsersData);
    const followingInProgress: Array<number> = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter));
    }, [dispatch, currentPage, pageSize, filter])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter));
    }

    const followUser = (userId: number) => {
        dispatch(follow(userId));
    }

    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId));
    }

    return <>
        {props.isFetching ? <Preloader /> :
            <div className="body__page">
                <div className='body__users users-body'>
                    <UsersSearchForm onFilterChanged={onFilterChanged} />
                    <div className='users-body__cards'>
                        {
                            usersData.map((user: UsersDataType) => <div key={user.id} className="users-body__card card-users-body">
                                <div className="border">
                                    <div className="wrap">
                                        <div className="product-wrap">
                                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='add user photos' />
                                        </div>
                                        <div className="loop-action">
                                            <NavLink to={'/profile/' + user.id} className="add-to-cart">Go to user</NavLink>
                                            {user.followed
                                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => { unfollowUser(user.id); }} className={ui.follow}>
                                                    <NavLink to={''} className="loop-add-to-cart">unFollow</NavLink>
                                                </button>
                                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => { followUser(user.id); }} className={ui.follow}>
                                                    <NavLink to={''} className="loop-add-to-cart">follow</NavLink>
                                                </button>}
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{user.name}</h3>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <Paginator
                        totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged} />
                </div>
            </div>
        }
    </>;
}
