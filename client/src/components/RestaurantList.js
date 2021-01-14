import React, { useEffect, useState } from 'react';
import Zelp from '../apis/zelp';
import { useGlobalContext } from '../context/context';
import { Link, useHistory } from 'react-router-dom';
import StarRating from '../components/StarRating';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useGlobalContext();
  let history = useHistory();
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await Zelp.get('/');
        console.log(response.data.data);
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      console.log(id);
      const response = await Zelp.delete(`/${id}`);
      console.log(response);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const renderRating = ({ average_rating, count }) => {
    if (!count) {
      return <span className="text-warning">No reviews yet</span>;
    }
    return (
      <>
        <StarRating rating={average_rating} />
        <span className="text-warning">({count})</span>
      </>
    );
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
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <Link
                      onClick={(e) => e.stopPropagation()}
                      to={`/restaurants/${restaurant.id}/update`}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={(e) => handleDelete(e, restaurant.id)}
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
