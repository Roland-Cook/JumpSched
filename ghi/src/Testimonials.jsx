import React, { useState } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5); // Default rating

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleAddTestimonial = () => {
    const newTestimonial = {
      Full_Name: fullName,
      description: description,
      rating: rating,
    };

    setTestimonials([...testimonials, newTestimonial]);
    setFullName("");
    setDescription("");
    setRating(5); // Reset rating
  };

  return (
    <div>
      <h1>Testimonials</h1>
      <div>
        <h2>Add a Testimonial</h2>
        <form>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={handleDescriptionChange} />
          </div>
          <div>
            <label>Rating:</label>
            <input type="number" value={rating} onChange={handleRatingChange} />
          </div>
          <button type="button" onClick={handleAddTestimonial}>
            Add Testimonial
          </button>
        </form>
      </div>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <h3>{testimonial.Full_Name}</h3>
            <p>{testimonial.description}</p>
            <p>Rating: {testimonial.rating} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
