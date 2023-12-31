import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function Manifest() {
  const [reservations, setReservations] = useState([]);
  const [sortBy, setSortBy] = useState("date");
    const { token } = useAuthContext();

  useEffect(() => {
    fetchReservations(sortBy);
  }, [sortBy]);





  const fetchReservations = (sortByValue) => {
    fetch(`http://localhost:8000/reservation?sort_by=${sortByValue}`)
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

  const customSort = (a, b) => {
    if (sortBy === "jumper_type") {
      const jumperTypeComparison = a.jumper_type.localeCompare(b.jumper_type);
      if (jumperTypeComparison !== 0) {
        return jumperTypeComparison;
      }
    } else if (sortBy === "date") {
      const dateComparison = a.date.localeCompare(b.date);
      if (dateComparison !== 0) {
        return dateComparison;
      }
    }

    const timeA = new Date(`1970-01-01T${a.time}`).getTime();
    const timeB = new Date(`1970-01-01T${b.time}`).getTime();
    return timeA - timeB;
  };





  const sortedReservations = [...reservations].sort(customSort);


  return (
  <>
      {token ? (
        <div>
          <h1>Reservations Manifest</h1>
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Date</option>
            <option value="jumper_type">Jumper Type</option>
          </select>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Jumper Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="manifest-table">
              {sortedReservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.first_name}</td>
                  <td>{reservation.last_name}</td>
                  <td>{reservation.jumper_type}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>
                    <h1>{reservation.status}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >
      ) : ( console.error("Nice try goofy")
      )}
          </>

  );
}

export default Manifest;
