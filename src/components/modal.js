import React, {useState, useEffect} from 'react';
import Counter from './counter';
import EmptyCart from './emptyCart';
import '../index.css';

const Modal = ({selectedItem}) => {
    const [Total, setTotal] = useState(null);
    const [addTotal, setAddTotal] = useState([]);

    const add = (items) => {
        const res = [...items];

        res.map(item => {
            item.total = item.price;
        });

        setAddTotal(res);
    };

    useEffect(() => {
        if (selectedItem && addTotal && selectedItem.length > 0 && selectedItem.length !== addTotal.length) {
            setAddTotal(selectedItem);
            add(selectedItem)
        }
    });

    return (
        <div>
            <i className="fas fa-shopping-cart"
               data-toggle="modal"
               data-target="#exampleModal"
            />

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {selectedItem && selectedItem.length !== 0 ?
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {selectedItem.map((item, i) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td><Counter setTotal={setTotal}
                                                             price={item.price}
                                                             addTotal={addTotal}
                                                             setAddTotal={setAddTotal}
                                                            id={i}/>
                                                </td>
                                                <td>{item.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> : <EmptyCart />
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
