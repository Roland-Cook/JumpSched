import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./images/rockyLogo.jpg"

function Form() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("09:00"); // Initialize with a default time
  const [selectedJumperType, setSelectedJumperType] = useState(""); // Initialize with an empty value
  const [appointment,setAppointment] = useState("")

  console.log("Appointment Status",appointment.status)


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
      status: "scheduled"
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
        setAppointment(response)
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
      <div
        className={`modal  ${appointment.status === 200 ? "myModal" : "myModal"} fade`}
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <img
                  src={logo}
                  style={{ height: "70px", paddingRight: "10px" }}
                ></img>
              </div>
              <h4 className="modal-title w-100">Awesome!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">
                Your booking has been confirmed. Check your email for detials.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary btn-block"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-5xl">
          <form action="" onSubmit={submitForm}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="first_name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="last_name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="phone_number"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5"></div>

                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <label
                htmlFor="jumper_type"
                className="mb-3 block text-base jumper-text font-medium text-[#07074D]"
              >
                Jumper Type
              </label>
              <select
                className="w-full-jumper rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    defaultValue={1 / 1 / 2023}
                  >
                    Date
                  </label>
                  <DatePicker
                    className="w-full w-full-date rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    minDate={minDate}
                    maxDate={maxDate}
                    type="date"
                    filterDate={isAvailableDate}
                    required
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
                  <select
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    required
                  >
                    {getAvailableTimes().map((time) => (
                      <option
                        key={time}
                        value={time}
                        disabled={!isAvailableTime(time)}
                      >
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              href=".myModal"
              data-toggle="modal"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
