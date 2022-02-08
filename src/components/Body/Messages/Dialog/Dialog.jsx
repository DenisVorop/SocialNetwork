import { NavLink } from 'react-router-dom';
import hedgehog from '../../../../assets/images/hedgehog.png';

//========================================================================================================================================================

const Dialog = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className='messages-body__user'>
            <NavLink to={path} className="messages-body__dialog">
                <div className="messages-body__image">
                    <img src={hedgehog} alt='hedgehog'/>
                </div>
                {props.name}
            </NavLink>
        </div>
    );
}

//========================================================================================================================================================

export default Dialog;
