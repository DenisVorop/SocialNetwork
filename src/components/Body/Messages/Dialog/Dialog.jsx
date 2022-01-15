import { NavLink } from 'react-router-dom';

//========================================================================================================================================================

const Dialog = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className='messages-body__user'>
            <NavLink to={path} className="messages-body__dialog">
                <div className="messages-body__image">
                    <img src='https://sun9-25.userapi.com/impg/8Hxs-5Fi7nYEnaxzvAf5uGgdZ-AEM3ig2Fivkw/_51hBNfr4sA.jpg?size=828x828&quality=96&sign=c92f719a55e5af4ba9d22d59ed55c052&type=album' />
                </div>
                {props.name}
            </NavLink>
        </div>
    );
}

//========================================================================================================================================================

export default Dialog;
