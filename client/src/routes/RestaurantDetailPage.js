import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import zelp from '../apis/zelp';
import StarRating from '../components/StarRating';
import { useGlobalContext } from '../context/context';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useGlobalContext();

  useEffect(() => {
    const fetchSingleRestaurant = async () => {
      try {
        const response = await zelp.get(`/${id}`);
        console.log(response);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleRestaurant();
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : '(0)'}
            </span>
          </div>
          <div className="my-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>

          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
