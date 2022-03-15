import React from 'react';
import { connect } from 'react-redux';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/MessagesReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

let mapStateToProps = (state: AppStateType) => { //принимает в параметры state
    return { //для данных из стейта 
        dialogsPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return { //для коллбэков
        addMessage: () => {dispatch(addMessageAC())},
        updateNewMessageText: (text: string) => {dispatch(updateNewMessageTextAC(text));},
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;