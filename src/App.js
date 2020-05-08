import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import BrowseItem from './components/browseItem';
import { data } from './components/mockData';

function App() {
    const [items, setItems] = useState(data);
    const [filteredItems, setFilteredItems] = useState(data);
    const [selectedItem, setSelectedItem] = useState([]);

    return (
        <React.Fragment>
            <NavBar selectedItem={selectedItem} />
            <main className="container">
                <Switch>
                    <Route exact path="/">
                        <BrowseItem items={items}
                                    filteredItems={filteredItems}
                                    setFilteredItems={setFilteredItems}
                                    selectedItem={selectedItem}
                                    setSelectedItem={setSelectedItem} />
                    </Route>
                </Switch>
            </main>
        </React.Fragment>
    );

}

export default App;
