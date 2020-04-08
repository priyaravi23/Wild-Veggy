import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../index.css';

export default function BrowseItem () {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
            .then(res =>
                    res.data.map(item => ({
                    id: `${item.id}`,
                    name: `${item.name}`,
                    price: `${item.price}`,
                    image: `${item.image}`,
                    category: `${item.category}`,
                }))
            )
            .then(data => {
                setItems(data);
                setFilteredItems(data);
            })
    }, []);

    const handleInputChange = (e) => {
        const input = e.target.value;
        const re = new RegExp(input, 'i');

        const filteredItems = items.filter(item => {
            return re.test(item.name)
        });

        setFilteredItems(filteredItems);
        console.log(filteredItems)
    };

    return (
        <div>
            <div className="name">
                <input type='text'
                       autoFocus
                       className="form-control"
                       placeholder='Search...'
                       onChange={handleInputChange} />

                <div className='grid-container'>
                    {filteredItems.map(item => (
                        <div className="card bg-light grid-item">
                            <img className="card-img-top" src={item.image} alt={item.name} />
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {item.name}
                                        </h6>
                                    <h5 className="card-title">
                                        {item.price}
                                        </h5>

                                    <button
                                        type="button"
                                        className="btn btn-success">ADD TO CART
                                    </button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}