import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className="messages-body__dialog">
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;
