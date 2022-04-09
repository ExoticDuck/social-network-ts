import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {
    MessagePageType
} from '../../redux/store';
import s from './Dialogs.module.css'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type DialogsPropsType = {
    addMessage: (value: string) => void
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

    let addNewMessage = (values: AddMessageType) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

type AddMessageType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' component={"textarea"} placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;