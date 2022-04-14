import React from 'react';
import './App.css';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom'
import { StateType } from './redux/store';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import { UsersContainer } from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/AuthReducer';
import { compose } from 'redux';
import { initializeApp } from './redux/AppReducer';

//* урок 79 закончен

type AppPropsType = {
  initializeApp: () => void
}

// const App: React.FC<AppPropsType> = (props) => {
//   return (
//       <div className="App">
//         <HeaderContainer/>
//         <NavbarContainer />
//         <div className="app-wrapper-content">

//           <Route path='/dialogs' render={() => <DialogsContainer/>}/>
//           <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
//           <Route path='/news'render={() => <News/>}/>
//           <Route path='/music' render={() => <Music/>}/>
//           <Route path='/settings' render={() => <Settings/>} />
//           <Route path='/users' render={() => <UsersContainer/>} />
//           <Route path='/login' render={() => <Login/>} />

//         </div> 
//       </div>
//   );
// }

class App extends React.Component<AppPropsType, {}> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">

          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />

        </div>
      </div>
    )
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connect(null, { initializeApp }))(App);
