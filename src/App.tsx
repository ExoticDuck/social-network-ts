import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route, Routes } from 'react-router-dom'
import { StateType} from './redux/store';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import { UsersContainer } from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

//оставь надежду всяк сюда входящий
//* урок 57 закончен

type AppPropsType = {
  state?: StateType
  dispatch?: (action: any) => void
  store?: any
}

const App: React.FC<AppPropsType> = (props) => {
  return (
      <div className="App">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
          <Route  path='/dialogs' element={< DialogsContainer />}/>
          <Route path='/profile/:userId' element={<ProfileContainer />}/>
          <Route path='/news' element={<News/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/users' element={<UsersContainer/>} />
          </Routes>
        </div> 
      </div>
  );
}

export default App;