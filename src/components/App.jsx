import React from "react";
import {Router, Route} from 'react-router-dom';

import Header from './Header'
import {createBrowserHistory} from 'history';

import SearchVideos from './SearchVideos'
import VideoDetail from './VideoDetail';


const App = () => {
    return (
      <Router history={createBrowserHistory()}>
          <Header/>
          <Route path="/" exact component={SearchVideos}></Route>
          <Route path="/videoDetail/:id" exact component={VideoDetail}></Route>
      </Router>
    );
};

export default App;
