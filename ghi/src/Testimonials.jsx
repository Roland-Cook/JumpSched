import React, { useState, useEffect } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5); // Default rating





    async function loadTestimonials() {
      const response = await fetch("http://localhost:8000/testimonial");


      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    }

    useEffect(() => {
      loadTestimonials()
    }, [fullName]);


  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleAddTestimonial = async (event) => {
    event.preventDefault();

      const data = {}
      data.Full_Name= fullName,
      data.description=description,
      data.rating=rating


    const Url = "http://localhost:8000/testimonial";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(Url, fetchConfig);
    console.log(response)


    if(response.ok){
      setFullName("");
      setDescription("");
      setRating(5); // Reset rating
    }

  };

  return (
    <>
      <div className="min-w-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1
                className="text-6xl md:text-7xl font-bold mb-5 text-gray-600"
                style={{ color: "#3989ec" }}
              >
                What people <br />
                are saying.
              </h1>
              <h3
                className="text-xl mb-5 font-light"
                style={{ color: "#3989ec" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>

            <div className="-mx-3 md: items-start">
              <div className="px-3 grid grid-cols-3 gap-4">
                {testimonials.map((testimonial) => (
                  <>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                      <div className="w-full flex mb-4 items-center">
                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                          <img src="https://i.pravatar.cc/100?img=1" alt="" />
                        </div>
                        <div className="flex-grow pl-3">
                          <h6 className="font-bold text-sm uppercase text-gray-600">
                            {testimonial.Full_Name}
                          </h6>
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-sm leading-tight">
                          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                            "
                          </span>
                          {testimonial.description}
                          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                            "
                          </span>
                        </p>
                      </div>
                      <div className="font-bold text-sm uppercase text-gray-600 mt-6 ">
                        {testimonial.rating} Stars
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="add-testimonials mt-8">
              <div className="testimonial-form">
                <h2>Add a Testimonial</h2>
                <form>
                  <div className="">
                    <label>Full Name:</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      value={fullName}
                      onChange={handleFullNameChange}
                    />
                  </div>
                  <div>
                    <label>Description:</label>
                    <textarea
                      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                  <div>
                    <label>Rating:</label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={rating}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleRatingChange}
                    />
                  </div>
                  <button type="button" onClick={handleAddTestimonial}>
                    Add Testimonial
                  </button>
                </form>
              </div>
            </div>
            <div className="testimonial-list"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
