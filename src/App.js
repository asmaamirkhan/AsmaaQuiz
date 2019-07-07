/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import HomePage from './HomePage';
import QuizPage from './QuizPage';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentWillMount() {
    document.title = "AsmaaQuiz"
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/quiz" component={QuizPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
