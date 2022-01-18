import './Users.scss';
import ui from '../../../scss/ui.module.scss';
import axios from 'axios';
import { unfollowActionCreator } from '../../../Redux/usersReducer';
import userPhoto from '../../../assets/images/user.png';
import React from 'react';

//========================================================================================================================================================

class Users extends React.Component {

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

    // props.setUsers([
    //     {
    //         id: 1,
    //         imageURL: 'https://sun9-25.userapi.com/impg/8Hxs-5Fi7nYEnaxzvAf5uGgdZ-AEM3ig2Fivkw/_51hBNfr4sA.jpg?size=828x828&quality=96&sign=c92f719a55e5af4ba9d22d59ed55c052&type=album',
    //         followed: false,
    //         status: 'its status 1',
    //         fullName: 'Denis',
    //         location: {
    //             country: 'Russia',
    //             city: 'Moscow'
    //         }
    //     },
    //     {
    //         id: 2,
    //         imageURL: 'https://sun9-25.userapi.com/impg/8Hxs-5Fi7nYEnaxzvAf5uGgdZ-AEM3ig2Fivkw/_51hBNfr4sA.jpg?size=828x828&quality=96&sign=c92f719a55e5af4ba9d22d59ed55c052&type=album',
    //         followed: false,
    //         status: 'its status 2',
    //         fullName: 'Darya',
    //         location: {
    //             country: 'Russia',
    //             city: 'Magadan'
    //         }
    //     },
    //     {
    //         id: 3,
    //         imageURL: 'https://sun9-25.userapi.com/impg/8Hxs-5Fi7nYEnaxzvAf5uGgdZ-AEM3ig2Fivkw/_51hBNfr4sA.jpg?size=828x828&quality=96&sign=c92f719a55e5af4ba9d22d59ed55c052&type=album',
    //         followed: false,
    //         status: 'its status 3',
    //         fullName: 'Pavel',
    //         location: {
    //             country: 'Belarus',
    //             city: 'Minsk'
    //         }
    //     },
    // ])
    // }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return <div className='body__users users-body'>
            <div className='users-body__cards'>
                {
                    this.props.usersData.map(user =>
                        <div key={user.id}>
                            <div className="users-body__card card-users-body">
                                <div className="card-users-body__header">
                                    <div className="card-users-body__image">
                                        <img src={user.photos.small != null ? unfollowActionCreator.photos.small : userPhoto} />
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
                                        ? <button onClick={() => { this.props.unfollow(user.id) }} className={ui._btn}>Follow</button>
                                        : <button onClick={() => { this.props.follow(user.id) }} className={ui._btn}>unFollow</button>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='users-body__pages'>
                {pages.map(pages => {
                    return <div className='users-body__page'><div onClick={(e) => { this.onPageChanged(pages) }} className={this.props.currentPage === pages && ui.selected}>{pages}</div></div>
                })}
            </div>
        </div>
    }
}

//========================================================================================================================================================

export default Users;
