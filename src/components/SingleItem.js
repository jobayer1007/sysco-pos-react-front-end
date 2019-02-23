import React, { Component } from 'react';

/**
 * Container for the list of todos
 */
class SingleItem extends Component {

    render() {
        let { productTitle, description, quantity, price } = this.props.singleItem;
        return (
            <li className="list-group-item d-flex justify-content-right" style={{ margin: '0px', padding: '0px', width: '100%' }}>
                <div className="row" style={{ margin: '0px', width: '100%' }}>
                    <div className="col-10 card">
                        <div className="card-body" style={{ padding: '5px 0px' }}>
                            <h6 className="card-title d-flex justify-content-right">{productTitle}</h6>
                            <p className="card-subtitle text-muted d-flex justify-content-right">{description}</p>
                        </div>
                    </div>
                    <div className="col-2 card text-right">
                        <p className="card-text" style={{ margin: '5px 0 0 0' }}>{quantity} x {price}</p>
                        <p className="card-link" style={{ margin: '0px' }}><b>Rs. {(quantity * price).toFixed(2)}</b></p>
                    </div>
                </div>
            </li>
        );
    }
}

export default SingleItem;