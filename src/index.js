import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider} from "./State/StateProvider";
import {initialState,reducer} from "./reducer/reducer";



ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
         <div className="app">
              <App />
         </div>
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


