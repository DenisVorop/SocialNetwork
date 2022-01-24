import React from 'react';
import ui from '../../../../scss/ui.module.scss';

//========================================================================================================================================================

class UserStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <div onClick={this.activateEditMode} className={ui.input__div}>
                            <span>{this.props.status || 'No status'}</span>
                        </div>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} className={ui.input} />
                    </div>
                }
            </div>
        )
    }
}

//========================================================================================================================================================

export default UserStatus;
