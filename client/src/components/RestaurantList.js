import React, { useEffect, useState } from 'react';
import Zelp from '../apis/zelp';
import { useGlobalContext } from '../context/context';
import { Link, useHistory } from 'react-router-dom';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useGlobalContext();
  let history = useHistory();
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await Zelp.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleUpdate = (id) => {
    history.push(`/restaurants/${id}/update`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await Zelp.delete(`/${id}`);
      console.log(response);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="list-group">
      <table className="table table-dark table-striped table-hover">
        <thead className="table-primary">
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>reviews</td>

                  <td>
                    <Link
                      to={`/restaurants/${restaurant.id}/update`}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(restaurant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
