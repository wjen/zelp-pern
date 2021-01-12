import React, { useState, useContext, createContext } from 'react';

const RestaurantsContext = React.createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
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
