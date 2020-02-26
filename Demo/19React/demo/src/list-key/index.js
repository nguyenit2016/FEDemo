import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [
                { id: 1, name: 'Iphone X', price: 1000 },
                { id: 2, name: 'Iphone SX', price: 2000 },
                { id: 3, name: 'Iphone XR', price: 3000 }
            ]
        }
    }

    renderTableBody = () => {
        return this.state.listProduct.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTableBody()}</tbody>
                </table>
            </div>
        )
    }
}
