import React, { useState } from "react";
import "./Checkout.css";

const CheckOut = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1", price: 10, discount: 2.5, quantity: 1, image: "item1.jpg" },
        { id: 2, name: "Item 2", price: 15, discount: 3.75, quantity: 2, image: "item2.jpg" },
    ]);
    const handleRemoveItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
    };
    const handleSaveForLater = (itemId) => {
        console.log("Item saved for later:", itemId);
    };
    const handleGoBack = () => {
        console.log("Going back...");
    };

    return (
        <div>
            <div className="product-details-header">
                <nav className="product-details-navbar">
                    <div className="product-details-logo" onClick={handleGoBack}>
                        <box-icon name="arrow-back"></box-icon>
                        <h4 className="product-details-title">Checkout</h4>
                    </div>
                    <box-icon name="cart"></box-icon>
                </nav>
            </div>
            <div className="items-container">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <div className="item-details">
                            <div>
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
                                <p>Discount: {item.discount}% off</p>
                            </div>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-actions">
                            <div>
                                <label htmlFor={`qty-${item.id}`}>Qty:</label>
                                <input
                                    type="number"
                                    id={`qty-${item.id}`}
                                    value={item.quantity}
                                    onChange={(e) => {
                                        const newQuantity = parseInt(e.target.value);
                                        setItems(prevItems => prevItems.map(prevItem => {
                                            if (prevItem.id === item.id) {
                                                return { ...prevItem, quantity: newQuantity };
                                            }
                                            return prevItem;
                                        }));
                                    }}
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <div className="icons">
                                <span onClick={() => handleSaveForLater(item.id)}>Save for Later</span>
                                <span onClick={() => handleRemoveItem(item.id)}>Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckOut;
