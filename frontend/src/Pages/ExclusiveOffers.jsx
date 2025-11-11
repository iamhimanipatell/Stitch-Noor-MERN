import React, { useEffect, useState } from 'react'
import './ExclusiveOffers.css'
import Item from '../Components/Item/Item'

const ExclusiveOffers = () => {
  const [exclusiveProducts, setExclusiveProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => {
        setExclusiveProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching exclusive offers:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='exclusive-offers-page'>
      <div className="breadcrumb-simple">
        <span>HOME</span> / <span>EXCLUSIVE OFFERS</span>
      </div>
      
      <div className="exclusive-offers-container">
        <div className="exclusive-offers-header">
          <h1>Exclusive Offers</h1>
          <p>Best selling products with amazing discounts</p>
        </div>

        {loading ? (
          <div className="loading">Loading exclusive offers...</div>
        ) : exclusiveProducts.length > 0 ? (
          <div className="exclusive-offers-items">
            {exclusiveProducts.map((item, i) => (
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
            <p>No exclusive offers available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExclusiveOffers

