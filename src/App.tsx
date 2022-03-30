import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route} from 'react-router-dom'
import { StateType} from './redux/store';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import { UsersContainer } from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

//* урок 60 закончен

type AppPropsType = {
  state?: StateType
  dispatch?: (action: any) => void
  store?: any
}

const App: React.FC<AppPropsType> = (props) => {
  return (
      <div className="App">
        <HeaderContainer/>
        <NavbarContainer />
        <div className="app-wrapper-content">
          
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/news'render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>} />
          <Route path='/users' render={() => <UsersContainer/>} />
        
        </div> 
      </div>
  );
}

export default App;
