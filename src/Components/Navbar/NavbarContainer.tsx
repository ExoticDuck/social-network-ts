import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Navbar from './Navbar';

let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.sidebar
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {}
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;