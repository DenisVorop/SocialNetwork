import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div>
            <NavLink to={path} className="messages-body__dialog">
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;
