import React from 'react';
import { StoreType } from './redux/store';


const StoreContext = React.createContext({} as StoreType);

export default StoreContext;