import React, { useState, useContext } from 'react';

const RestaurantsContext = React.createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestaurantsContext);
};
export { RestaurantsContextProvider, useGlobalContext };
