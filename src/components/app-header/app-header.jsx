import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './app-header.scss';

const AppHeader = ({ totalPrice }) => {
    return (
        <header className="header">
            <Link to="/" className="header__link">Menu</Link>
            <Link to="/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart" />
                Total: {totalPrice} $
            </Link>
        </header>
    )
}

const mapStateToProps = ({ totalPrice }) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);
