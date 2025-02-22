import React from 'react';

const FurnitureItem = ({ item }) => {
    return (
        <div className="furniture-item">
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
};

export default FurnitureItem;