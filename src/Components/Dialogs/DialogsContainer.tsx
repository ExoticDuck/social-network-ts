import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/MessagesReducer';
import { AppStateType } from '../../redux/redux-store';
import { MessagePageType } from '../../redux/store';
import Dialogs from './Dialogs';

type mapStateToPropsType = {
    dialogsPage: MessagePageType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => { //принимает в параметры state
    return { //для данных из стейта 
        dialogsPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return { //для коллбэков
        addMessage: () => {dispatch(addMessageAC())},
        updateNewMessageText: (text: string) => {dispatch(updateNewMessageTextAC(text));},
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;