import React  from 'react';
import Modal from '../components/modal';

export default function BrowseItem ({items, filteredItems, setFilteredItems, setSelectedItem}) {
    const handleInputChange = (e) => {
        const input = e.target.value;
        const re = new RegExp(input, 'i');

        const filteredItems = items.filter(item => {
            return re.test(item.name)
        });

        setFilteredItems(filteredItems);
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
                        <div key={item.id} className="card bg-light grid-item">
                            <img className="card-img-top" src={item.image} alt={item.name} />
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {item.name}
                                        </h6>
                                    <h5 className="card-title">
                                        ${item.price}
                                        </h5>

                                    <button
                                        type="button"
                                        onClick={() => setSelectedItem(item)}
                                        className="btn btn-success button">ADD TO CART
                                    </button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}