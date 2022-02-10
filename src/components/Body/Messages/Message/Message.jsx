const Message = (props) => {
    return (
        <div className="messages-body__messagefield">
            <div className="messages-body__block">
                <div className="messages-body__userphoto">
                    <img src={props.image} alt="person avatar" />
                </div>
                <div className="messages-body__username">
                    {props.userName}
                </div>
            </div>
            <div className="messages-body__message">
                {props.textMessage}
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default Message;
