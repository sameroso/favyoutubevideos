import React from "react";
import {Router, Route} from 'react-router-dom';

import Header from './Header'
import {createBrowserHistory} from 'history';

import SearchVideos from './SearchVideos'
import VideoDetail from './VideoDetail';
import userList from './userList';


const App = () => {
    return (
      <Router history={createBrowserHistory()}>
          <Header/>
          <Route path="/" exact component={SearchVideos}></Route>
          <Route path="/videoDetail/:id" exact component={VideoDetail}></Route>
          <Route path="/mylist" exact component={userList}></Route>
      </Router>
    );
};

export default App;
