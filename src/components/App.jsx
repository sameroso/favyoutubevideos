import React from "react";
import {Router, Route} from 'react-router-dom';

import Header from './Header'
import {createBrowserHistory} from 'history';

import SearchVideos from './SearchVideos'
import VideoDetail from './VideoDetail';
import UserList from './UserList';


const App = () => {
    return (
      <Router history={createBrowserHistory()}>
          <Header/>
          <Route path="/" exact component={SearchVideos}></Route>
          <Route path="/videoDetail/:id" exact component={VideoDetail}></Route>
          <Route path="/mylist" exact component={UserList}></Route>
      </Router>
    );
};

export default App;
