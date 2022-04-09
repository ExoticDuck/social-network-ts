import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose, Dispatch } from 'redux';
import { addMessageAC} from '../../redux/MessagesReducer';
import { AppStateType } from '../../redux/redux-store';
import { MessagePageType } from '../../redux/store';
import Dialogs, { DialogsPropsType } from './Dialogs';
import { withAuthRedirect } from './../../HOC/WithAuthRedirect';

type mapStateToPropsType = {
    dialogsPage: MessagePageType
}

type mapDispatchToPropsType = {
    addMessage: (value: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => { //принимает в параметры state
    return { //для данных из стейта 
        dialogsPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return { //для коллбэков
        addMessage: (value: string) => {dispatch(addMessageAC(value))}
    }
}

let DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;