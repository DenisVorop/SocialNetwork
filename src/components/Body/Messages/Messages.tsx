// import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'
import '../Profile/Profile.scss'
import React, { useState, useEffect } from 'react';

import { MessagesForm } from './MessagesForm';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

//========================================================================================================================================================

export type MessagesType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const Messages = (props) => {

    const webSocket: WebSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    const [messages, setMessages] = useState<MessagesType[]>([])

    useEffect(() => {
        webSocket.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    const addNewMessage = (values) => {
        if (!values.newMessageText) {
            return
        }
        webSocket.send(values.newMessageText)
    }

    // const dialogsElements =
    //     props.stateMessagesPage.dialogData
    //         .map((dialog, index: number) =>
    //             <Dialog name={dialog.name} id={dialog.name} key={index} />
    //         )

    const messagesElements = messages.map((message, index) =>
        <Message textMessage={message.message} key={index} image={message.photo} userName={message.userName} />
    )

    return (
        <div className="body__messages messages-body">
            <div className='messages-body__row'>
                <div className="messages-body__dialogs">
                    {/* {dialogsElements} */}
                </div>
                <div className='messages-body__right'>
                    <div className="messages-body__messages">
                        {messagesElements}
                    </div>
                    <MessagesForm addNewMessage={addNewMessage} webSocket={webSocket} />
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default withAuthRedirect(Messages);
