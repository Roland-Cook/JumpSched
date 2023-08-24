import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Manifest() {
  const [reservations, setReservations] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetchReservations();
  }, [selectedDate]);

  const fetchReservations = () => {
    let url = `http://localhost:8000/reservation`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const filteredReservations = reservations.filter(
    (reservation) => !selectedDate || reservation.date === selectedDate
  );

  const sortedReservations = filteredReservations.sort((a, b) => {
    const dateComparison = a.date.localeCompare(b.date);
    if (dateComparison !== 0) {
      return dateComparison;
    }
    return a.time.localeCompare(b.time);
  });

  return (
    <div>
      <h1>Reservations Manifest</h1>
      <label>Select Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Jumper Type</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedReservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.first_name}</td>
              <td>{reservation.last_name}</td>
              <td>{reservation.phone_number}</td>
              <td>{reservation.email}</td>
              <td>{reservation.jumper_type}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manifest;
