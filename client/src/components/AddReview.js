import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import zelp from '../apis/zelp';

const AddReview = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('Rating');
  const [reviewText, setReviewText] = useState('');
  const { id } = useParams();
  const history = useHistory();

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    try {
      const response = await zelp.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      history.go(0);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-2">
      <form onSubmit={handleSubmitReview}>
        <div className="row">
          <div className="mb-3 col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              name="rating"
              id="rating"
              className="form-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            name="review"
            id="review"
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
