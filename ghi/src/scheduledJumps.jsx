
import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";
import { Link } from "react-router-dom";

function ScheduledJumps() {

    const [reservations, setReservations] = useState([]);
    const [account, setAccount] = useState("");
    const [userData, setUserData] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const fetchReservations = () => {
        fetch(`http://localhost:8000/reservation`)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setReservations(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

        useEffect(() => {
            fetchReservations();
        }, [reservations]);




        const deleteRes = (reservationId) => {
          fetch(`http://localhost:8000/reservation/${reservationId}`, {
            method: "DELETE",
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const updatedReservations = reservations.filter(
                (reservation) => reservation.id !== reservationId
              );
              setReservations(updatedReservations);
            })
        };
     
     
     
       const completeRes = async (reservationId) => {
         const iUrl = `http://localhost:8000/reservation/${reservationId}`
     
         const data = {};
         data.status = "completed";
         console.log(JSON.stringify(data))
     
         const fetchConfig2 = {
           method: "PUT",
           body: JSON.stringify(data),
           headers: {
               'Content-Type': 'application/json',
           }
       }
         const response2 = await fetch(iUrl, fetchConfig2)
         console.log(response2)
     
     }


  const handleFetchWithAPI = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data.account);
      setAccount(data.account);
      setTimeout(() => {
        setUserData(data);
        setIsLoading(false);
      }, 10);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleFetchWithAPI();
  }, []);


    return (
      <>
        <div className="event-schedule-area-two bg-color pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text">
                    <h2>Event Schedule</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Natus numquam, ut amet eligendi quibusdam velit. Possimus
                    tempora quaerat quibusdam repudiandae culpa saepe
                    architecto, officia explicabo dolor sint, quo placeat id.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav custom-tab" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      id="home-taThursday"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Scheduled Jumps
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade active show"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center" scope="col">
                              Name
                            </th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Jump Type</th>
                            <th className="text-center" scope="col">
                              Date
                            </th>
                            <th className="text-center" scope="col">
                              Time
                            </th>
                            <th className="text-center" scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {reservations
                            .filter((res) => res.email === account.email && res.status == "scheduled")
                            .map((reservation) => (
                              <>
                                <tr className="inner-box">
                                  <th scope="row">
                                    <div className="event-wrap">
                                      <p>{reservation.first_name}</p>
                                    </div>
                                  </th>
                                  <td>
                                    <p>{reservation.phone_number}</p>
                                  </td>
                                  <td>
                                    <span>{reservation.email}</span>
                                  </td>
                                  <td>
                                    <div className="r-no">
                                      <span>{reservation.jumper_type}</span>
                                    </div>
                                  </td>
                                  <td>
                                    <span>{reservation.date}</span>
                                  </td>
                                  <td>
                                    <span>{reservation.time}</span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-outline-danger"
                                      onClick={() => deleteRes(reservation.id)}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-outline-success"
                                      onClick={() => completeRes(reservation.id)}
                                    >
                                      Complete
                                    </button>
                                  </td>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ScheduledJumps
