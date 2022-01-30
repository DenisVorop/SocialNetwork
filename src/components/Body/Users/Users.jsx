import userPhoto from '../../../assets/images/user.svg';
import Preloader from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import ui from '../../../scss/ui.module.scss';

//========================================================================================================================================================

const Users = (props) => {
    return <>
        <div className="body__page">
            <div className='body__users users-body'>
                <div className='users-body__cards'>
                    {props.isFetching ? <Preloader /> :
                        props.usersData.map(user =>
                            <div key={user.id} className="users-body__card card-users-body">
                                <div className="border">
                                    <div className="wrap">
                                        <div className="product-wrap">
                                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                                        </div>
                                        <div className="loop-action">
                                            <NavLink to={'/profile/' + user.id} className="add-to-cart">Go to user</NavLink>
                                            {user.followed
                                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                    onClick={() => { props.unfollow(user.id); }} className={ui.follow}>
                                                    <NavLink to={''} className="loop-add-to-cart">unFollow</NavLink>
                                                </button>
                                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                    onClick={() => { props.follow(user.id); }} className={ui.follow}>
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
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
            </div>
        </div >
    </>
}


//========================================================================================================================================================

export default Users;
