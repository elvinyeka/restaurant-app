import React from 'react';
import './card-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';
import WithRestoService from '../hoc';



const CardTable = ({ items, deleteFromCart, RestoService }) => {
    if (items.length === 0) {
        return (
            <div className="cart__title">Your Cart Empty :( </div>
        )
    }
    return (
        <div>
            <div className="cart__title">Your Order: </div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const { title, price, url, id, qtty } = item;
                        return (
                            <div key={id} className="cart__item">
                                <img className="cart__item-img" src={url} alt={title} />
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ * {qtty}</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => { RestoService.setOrder(generateOrder(items)) }} className="order">Make Order</button>
        </div>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

// const mapDispatchToProps = () => {
//     return {
//         onDelete: (id) => {
//             console.log(`Deleted ${id}`);
//         }
//     }
// }

const mapDispatchToProps = {
    deleteFromCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CardTable));
