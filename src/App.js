import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import BrowseItem from './components/browseItem';
import Cart from "./components/cart";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={BrowseItem}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
