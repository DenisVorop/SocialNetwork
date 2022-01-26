import ui from '../../../scss/ui.module.scss';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';

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
                                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                onClick={() => { props.unfollow(user.id); }} className={ui._btn}>unFollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                onClick={() => { props.follow(user.id); }} className={ui._btn}>Follow</button>}
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
