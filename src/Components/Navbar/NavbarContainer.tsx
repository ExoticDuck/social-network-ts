import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { SidebarPageType } from '../../redux/store';
import Navbar from './Navbar';


type mapStateToPropsType = {
    state: SidebarPageType
} 

type mapDispatchToPropsType = {}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.sidebar
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {}
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;