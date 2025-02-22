import React, { useEffect, useState } from 'react';
import FurnitureItem from './components/FurnitureItem';

const App = () => {
    const [furnitureItems, setFurnitureItems] = useState([]);

    useEffect(() => {
        const fetchFurniture = async () => {
            const response = await fetch('/api/furniture');
            const data = await response.json();
            setFurnitureItems(data);
        };

        fetchFurniture();
    }, []);

    return (
        <div>
            <h1>Furniture Collection</h1>
            <div className="furniture-list">
                {furnitureItems.map(item => (
                    <FurnitureItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default App;