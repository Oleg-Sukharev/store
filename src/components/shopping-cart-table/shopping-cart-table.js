import React from "react"
import { connect } from 'react-redux'
import "./shopping-cart-table.css"
import { withBookstoreService } from '../hoc'
import { 
        fetchBooks,
        bookAddedToCart,
        allBookRemoveFromCart,
        bookRemoveFromCart
        } from "../../actions"

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item,index) =>{
        const { id, title, count, total } = item;
        return(
            <tr key={id}>
                <td>{ index + 1 }</td>
                <td>{ title }</td>
                <td>{ count }</td>
                <td>{ total }</td>
                <td>
                    <button className="btn btn-outline-success"
                        onClick={ ()=> onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning"
                        onClick={ ()=> onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                    <button className="btn btn-outline-danger"
                        onClick={ ()=> onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                </td>
            </tr>
        );
    }
    return(
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({ shoppingCart :{ orderTotal, cartItems }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
}

const mapDispatchToProps = {
        onIncrease:bookAddedToCart,
        onDecrease: bookRemoveFromCart,
        onDelete: allBookRemoveFromCart,
}



export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable)