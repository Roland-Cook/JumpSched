import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("09:00"); // Initialize with a default time
  const [selectedJumperType, setSelectedJumperType] = useState(""); // Initialize with an empty value

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleJumperTypeChange = (e) => {
    setSelectedJumperType(e.target.value);
    setSelectedTime("09:00"); // Reset time to 9:00 AM when changing jumper type
  };

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const maxDate = new Date(today);
  maxDate.setMonth(today.getMonth() + 2);

  const isAvailableDate = (date) => {
    const day = date.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    return day !== 2 && day !== 4; // Return true for all days except Tuesday and Thursday
  };

  const getAvailableTimes = () => {
    const availableTimes = [];
    for (let hour = 9; hour <= 16; hour++) {
      availableTimes.push(`${hour.toString().padStart(2, "0")}:00`);
    }
    return availableTimes;
  };

  const isAvailableTime = (time) => {
    if (selectedJumperType === "student") {
      return time === "09:00";
    }
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let dateObj = selectedDate;
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newDate = year + "-" + month + "-" + day;
    const formValues = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      phone_number: e.target.phone_number.value,
      email: e.target.email.value,
      jumper_type: selectedJumperType,
      date: newDate,
      time: selectedTime,
    };
    console.log(formValues);
    try {
      const response = await fetch("http://localhost:8000/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        // Reset form after successful submission
        setSelectedDate(null);
        setSelectedTime("09:00");
        setSelectedJumperType("");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="form-container">
      <form action="" onSubmit={submitForm} className="signup-form">
        <label htmlFor="first_name">First Name</label>
        <input type="text" name="first_name" required />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" name="last_name" required />
        <label htmlFor="phone_number">Phone Number</label>
        <input type="text" name="phone_number" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="jumper_type">Jumper Type</label>
        <select
          name="jumper_type"
          value={selectedJumperType}
          onChange={handleJumperTypeChange}
          required
        >
          <option value="">Select Jumper Type</option>
          <option value="tandem">Tandem</option>
          <option value="student">Student</option>
          <option value="fun_jumper">Fun Jumper</option>
        </select>
        <label htmlFor="date">Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          minDate={minDate}
          maxDate={maxDate}
          filterDate={isAvailableDate}
          required
        />
        <label htmlFor="time">Time</label>
        <select value={selectedTime} onChange={handleTimeChange} required>
          {getAvailableTimes().map((time) => (
            <option key={time} value={time} disabled={!isAvailableTime(time)}>
              {time}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>




<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          How many guest are you bringing?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Are you coming to the event?
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton1"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton2"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
</>
  );
}

export default Form;
