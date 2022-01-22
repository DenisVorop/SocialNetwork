import ui from '../../../scss/ui.module.scss';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
            {props.isFetching ? <Preloader /> : null}
            <div className='body__users users-body'>
                <div className='users-body__cards'>
                    {
                        props.usersData.map(user =>
                            <div key={user.id}>
                                <div className="users-body__card card-users-body">
                                    <div className="card-users-body__header">
                                        <NavLink to={'/profile/' + user.id}>
                                            <div className="card-users-body__image">
                                                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                                            </div>
                                        </NavLink>
                                        <div className="card-users-body__name">
                                            {user.name}
                                        </div>
                                    </div>
                                    <div className="card-users-body__info">
                                        <div className="card-users-body__location">
                                            <div className="card-users-body__country">
                                                {/* {user.location.country} */}
                                            </div>
                                            <div className="card-users-body__city">
                                                {/* {user.location.city} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-users-body__button">
                                        {user.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                                props.toggleFolowingProgress(true, user.id);
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '00071860-fe5e-4145-bbba-c986916b8d9a',
                                                    },
                                                }).then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unfollow(user.id)
                                                        }
                                                        props.toggleFolowingProgress(false, user.id);
                                                    });
                                            }} className={ui._btn}>unFollow</button>

                                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                                props.toggleFolowingProgress(true, user.id);
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '00071860-fe5e-4145-bbba-c986916b8d9a',
                                                    },
                                                }).then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(user.id)
                                                        }
                                                        props.toggleFolowingProgress(false, user.id);
                                                    });
                                            }} className={ui._btn}>Follow</button>}
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
        </div>
    </>
}


//========================================================================================================================================================

export default Users;
