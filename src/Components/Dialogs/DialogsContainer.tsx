import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/MessagesReducer';
import StoreContext from '../../store-context';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = () => {
    return(
    <StoreContext.Consumer>
        {
            (store) => {
                let messageOnChange = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text));
                }
            
                let addMessage = () => {
                    store.dispatch(addMessageAC())
                }

                return (
                    <Dialogs addMessage={addMessage} updateNewMessageText={messageOnChange} dialogsPage={store.getState()}/>
                );
            }
        }
    </StoreContext.Consumer>
    ); 
}

export default DialogsContainer;