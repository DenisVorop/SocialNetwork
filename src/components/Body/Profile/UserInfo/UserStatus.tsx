import React, { ChangeEvent, useEffect, useState } from 'react';
import ui from '../../../../scss/ui.module.scss';

//========================================================================================================================================================
type PropsType = {
    status: string,
    updateStatus: (status: string) => void,
    editMode: boolean,
}

const UserStatus: React.FC<PropsType> = (props) => {

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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className='profile__status'>
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
