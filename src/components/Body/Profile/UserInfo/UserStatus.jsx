import React, { useEffect, useState } from 'react';
import ui from '../../../../scss/ui.module.scss';

//========================================================================================================================================================

const UserStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <div onClick={activateEditMode} className={ui.input__div}>
                        <span>{props.status || 'No status'}</span>
                    </div>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status} className={ui.input} />
                </div>
            }
        </div>
    )
}

//========================================================================================================================================================

export default UserStatus;
