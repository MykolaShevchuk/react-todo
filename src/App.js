import React, {Component} from "react";
import "./App.css";
import TodoPage from "./pages/TodoPage";
import {Switch, Route} from "react-router-dom";
import SignInPage from "./pages/SignInPage/index";
import SignUpPage from "./pages/SignUpPage/index";
import Header from "./layout/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <main className="row">
            <Switch>
              <Route exact path='/' component={TodoPage}/>
              <Route path='/signin' component={SignInPage}/>
              <Route path='/signup' component={SignUpPage}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
