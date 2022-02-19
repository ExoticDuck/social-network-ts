import React from 'react';
import StoreContext from '../../store-context';
import Navbar from './Navbar';


type NavbarContainerPropsType = {
}

const NavbarContainer: React.FC<NavbarContainerPropsType> = () => {
    return(
    <StoreContext.Consumer>
        {
            (store) => {
                return(
                    <Navbar state={store.getState().sidebar}/>
                )
            }
        }
    </StoreContext.Consumer>
    ); 
}

export default NavbarContainer;