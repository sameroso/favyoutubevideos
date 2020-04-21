import React from "react";
import {Router, Route} from 'react-router-dom';

import Header from './Header'
import SearchVideos from './SearchVideos'
import {createBrowserHistory} from 'history';



const App = () => {
    return (
      <Router history={createBrowserHistory()}>
          <Header/>
          <Route path="/" exact component={SearchVideos}></Route>
      </Router>
    );
};

export default App;
