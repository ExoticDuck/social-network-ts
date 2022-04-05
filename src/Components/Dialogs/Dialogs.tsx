import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {MessagePageType
} from '../../redux/store';
import s from './Dialogs.module.css'

export type DialogsPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
    dialogsPage: MessagePageType
}

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    text: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialgs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogItems = props.dialogsPage.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesItems = props.dialogsPage.messagesData.map((m) => <Message text={m.text} />);


    let messageOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewMessageText(text)
    }

    let addMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <div>
                        <textarea onChange={messageOnChange} value={props.dialogsPage.newMessageText} />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;