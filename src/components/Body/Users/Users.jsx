import ui from '../../../scss/ui.module.scss';
import userPhoto from '../../../assets/images/user.png';

//========================================================================================================================================================

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return <div className='body__users users-body'>
        <div className='users-body__cards'>
            {
                props.usersData.map(user =>
                    <div key={user.id}>
                        <div className="users-body__card card-users-body">
                            <div className="card-users-body__header">
                                <div className="card-users-body__image">
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                                </div>
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
                                    ? <button onClick={() => { props.unfollow(user.id) }} className={ui._btn}>Follow</button>
                                    : <button onClick={() => { props.follow(user.id) }} className={ui._btn}>unFollow</button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className='users-body__pages'>
            {pages.map(pages => {
                return <div className='users-body__page'><div onClick={(e) => { props.onPageChanged(pages) }} className={props.currentPage === pages && ui.selected}>{pages}</div></div>
            })}
        </div>
    </div>
}


//========================================================================================================================================================

export default Users;
