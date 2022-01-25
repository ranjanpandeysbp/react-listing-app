import React from 'react';
import './ListingItem.css';
import { Link } from "react-router-dom";

function ListingItem() {
    return (
        <div className="listing-item">
            <img className="listing-img" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="listing-details">
                <div className="listing-categories">
                    <span className="listing-category">Buy</span>
                    <span className="listing-category">Sell</span>
                </div>
                <Link to="/detail/1"><span className="listing-title">Awesome property</span></Link>
                <hr />
                <span className="listing-time">2 days ago</span>
            </div>
            <p className="listing-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
        </div>
    )
}

export default ListingItem
