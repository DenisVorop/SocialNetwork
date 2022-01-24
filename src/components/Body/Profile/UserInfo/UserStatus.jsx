import React from 'react';
import ui from '../../../../scss/ui.module.scss';

//========================================================================================================================================================

class UserStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <div onClick={this.activateEditMode} className={ui.input__div}>
                            <span>{this.props.status}</span>
                        </div>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status} className={ui.input} />
                    </div>
                }
            </div>
        )
    }
}

//========================================================================================================================================================

export default UserStatus;
