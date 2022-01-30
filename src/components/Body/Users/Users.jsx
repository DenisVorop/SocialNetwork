import ui from '../../../scss/ui.module.scss';
import userPhoto from '../../../assets/images/user.svg';
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';
import React from 'react';

//========================================================================================================================================================

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return <>
        <div className="body__page">
            <div className='body__users users-body'>
                <div className='users-body__cards'>
                    {props.isFetching ? <Preloader /> :
                        props.usersData.map(user =>
                            <div key={user.id} className="users-body__card card-users-body">
                                <div class="border">
                                    <div class="wrap">
                                        <div class="product-wrap">
                                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                                        </div>
                                        <div class="loop-action">
                                            <NavLink to={'/profile/' + user.id} class="add-to-cart">Go to user</NavLink>
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
                                    <div class="product-info">
                                        <h3 class="product-title">{user.name}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='users-body__pages'>
                    {pages.map(pages => {
                        return <div className='users-body__page'>
                            <div onClick={(e) => { props.onPageChanged(pages) }} className={props.currentPage === pages && ui.selected}>
                                {pages}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div >
    </>
}


//========================================================================================================================================================

export default Users;
