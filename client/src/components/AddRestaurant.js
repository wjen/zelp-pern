import React, { useState } from 'react';
import Zelp from '../apis/zelp';
import { useGlobalContext } from '../context/context';
const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');
  const { restaurants, setRestaurants } = useGlobalContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Zelp.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      setRestaurants([...restaurants, response.data.data.restaurant]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col-sm mb-3">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col-sm mb-3">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-control custom-select me-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-sm-auto mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
