// import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'
import '../Profile/Profile.scss'
import React, { useState, useEffect } from 'react';

import { MessagesForm } from './MessagesForm';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { useRef } from 'react';
// @ts-ignore
import { dialogType } from './../types/Types.ts';
import Dialog from './Dialog/Dialog';

//========================================================================================================================================================

export type MessagesType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const initialState = {
    dialogData: [
        { id: 1, name: 'Darya' },
        { id: 2, name: 'Maksim' },
        { id: 3, name: 'Fuad' },
        { id: 4, name: 'Faig' },
        { id: 5, name: 'Anatolich' },
        { id: 6, name: 'Denis' },
    ] as Array<dialogType>,
}

const Messages = () => {

    const webSocket: WebSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        webSocket.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])
    const [messages, setMessages] = useState<MessagesType[]>([])

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    const addNewMessage = (values) => {
        if (!values.newMessageText) {
            return
        }
        webSocket.send(values.newMessageText)
    }

    const dialogsElements = initialState.dialogData.map((dialog, index: number) =>
        <Dialog name={dialog.name} id={dialog.name} key={index} />
    )

    const messagesElements = messages.map((message, index) =>
        <Message textMessage={message.message} key={index} image={message.photo} userName={message.userName} />
    )

    return (
        <div className="body__messages messages-body">
            <div className='messages-body__row'>
                <div className="messages-body__dialogs">
                    {dialogsElements}
                </div>
                <div className='messages-body__right'>
                    <div className="messages-body__messages" style={{ overflowY: 'auto' }}
                    onScroll={scrollHandler}
                    >
                        {messagesElements}
                        <div ref={messagesAnchorRef}></div>
                    </div>
                    <MessagesForm addNewMessage={addNewMessage} webSocket={webSocket} />
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default withAuthRedirect(Messages);
