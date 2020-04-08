import React from 'react';
import Counter from './counter';
import EmptyCart from './emptyCart';
import '../index.css';

const Modal = ({selectedItem}) => {
  return (
    <div>
        <i className="fas fa-shopping-cart"
           data-toggle="modal"
           data-target="#exampleModal"
        />

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/*<EmptyCart />*/}
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
                            <tr>
                                <td>{selectedItem && selectedItem.name}</td>
                                <td>{selectedItem && selectedItem.price}</td>
                                <td><Counter /></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
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
