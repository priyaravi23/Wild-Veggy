import React, {useEffect, useState}  from 'react';

export default function BrowseItem ({items, filteredItems, setFilteredItems, setSelectedItem, selectedItem}) {
    const [newItem, setNewItem] = useState([]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        const re = new RegExp(input, 'i');

        const filteredItems = newItem.filter(item => {
            return re.test(item.name)
        });

        setFilteredItems(filteredItems);
    };

    const addItemsToCart = (item, idx) => {
        let select = [...newItem];
        select[idx].isDisabled = true;
        setSelectedItem(selectedItem && selectedItem.concat(item));
        setNewItem(select);
    };

    useEffect(() => {
        if (items && items.length > 0 && newItem && newItem.length !== items.length) {
            const res = [...items];

            res.map(item => {
                item.isDisabled = false;
            });

            setNewItem(res)
        }
    });

    return (
        <div>
            <div className="name">
                <input type='text'
                       autoFocus
                       className="form-control"
                       placeholder='Search...'
                       onChange={handleInputChange} />

                <div className='grid-container'>
                    {filteredItems.map((item, idx) => (
                        <div key={item.id} className="card bg-light grid-item">
                            <img className="card-img-top" src={item.image} alt={item.name} />
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted item-name">
                                        {item.name}
                                        </h6>
                                    <h5 className="card-title item-price">
                                        ${item.price}
                                        </h5>

                                    <button
                                        type="button"
                                        onClick={() => addItemsToCart(item, idx)}
                                        className="btn btn-success button"
                                        disabled={item.isDisabled} >
                                        ADD TO CART
                                    </button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}