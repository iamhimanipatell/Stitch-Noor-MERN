import React, { useEffect, useState } from 'react'
import './LatestCollection.css'
import Item from '../Components/Item/Item'

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
      .then((response) => response.json())
      .then((data) => {
        setLatestProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching latest collection:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='latest-collection-page'>
      <div className="breadcrumb-simple">
        <span>HOME</span> / <span>LATEST COLLECTION</span>
      </div>
      
      <div className="latest-collection-container">
        <div className="latest-collection-header">
          <h1>Latest Collection</h1>
          <p>Discover our newest arrivals and latest fashion trends</p>
        </div>

        {loading ? (
          <div className="loading">Loading latest products...</div>
        ) : latestProducts.length > 0 ? (
          <div className="latest-collection-items">
            {latestProducts.map((item, i) => (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products available in the latest collection yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LatestCollection

