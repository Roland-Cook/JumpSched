import { useState, useEffect } from "react";

function CompletedJumps() {
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
        setReservations(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleFetchWithAPI = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const data = await response.json();
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
                </div>
                <p>
                  Whether you're a skydiving veteran with countless jumps under
                  your belt or a newbie eagerly waiting for your next adventure,
                  JumpSched allows you to savor the excitement, beauty, and
                  accomplishment of your completed skydiving jumps.
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
                    Completed Jumps
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
                        </tr>
                      </thead>
                      <tbody>
                        {reservations
                          .filter(
                            (res) =>
                              res.email === account.email &&
                              res.status === "completed"
                          )
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

export default CompletedJumps;
