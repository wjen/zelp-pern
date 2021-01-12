import React from 'react';

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form>
        <div className="row">
          <div className="col-sm mb-3">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col-sm mb-3">
            <select className="form-control custom-select me-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-sm-auto mb-3">
            <button className="btn btn-primary w-100">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
