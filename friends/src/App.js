import React, { Component } from 'react';

import { FriendsListView, FormView } from "./views";
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsListView />
        <FormView />
      </div>
    );
  }
}

export default App;
