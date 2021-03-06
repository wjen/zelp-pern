import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import zelp from '../apis/zelp';

const UpdateRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const { restaurants } = useGlobalContext();
  useEffect(() => {
    const fetchSingleRestaurant = async () => {
      try {
        const response = await zelp.get(`/${id}`);
        console.log(response);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleRestaurant();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedRestaurant = await zelp.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });
      history.push('/');
      console.log(updatedRestaurant);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            name="name"
            id="name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            name="location"
            id="location"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            type="number"
            className="form-control"
            name="price_range"
            id="price_range"
            min="1"
            max="5"
          />
        </div>
        <div id="emailHelp" className="form-text mb-3">
          Price range 1 through 5
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
