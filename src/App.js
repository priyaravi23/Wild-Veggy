import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import BrowseItem from './components/browseItem';
import Modal from './components/modal';
import { data } from './components/mockData';

function App() {
    const [items, setItems] = useState(data);
    const [filteredItems, setFilteredItems] = useState(data);
    const [selectedItem, setSelectedItem] = useState();

    return (
        <React.Fragment>
            <NavBar />
            <main className="container">
                <Switch>
                    <Route exact path="/">
                        <BrowseItem items={items}
                                    filteredItems={filteredItems}
                                    setFilteredItems={setFilteredItems}
                                    setSelectedItem={setSelectedItem} />
                    </Route>

                    <Route path="/modal">
                        <Modal selectedItem={selectedItem} />
                    </Route>
                </Switch>
            </main>
        </React.Fragment>
    );

}

export default App;
