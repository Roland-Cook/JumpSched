import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";
import { Link } from "react-router-dom";
import useToken, { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

const Profile = () => {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
   const [reservations, setReservations] = useState([]);
   const [account,setAccount] = useState("")
   const [jumpCount,setJumpCount] = useState(0)
  const [lastJump, setLastJump] = useState("")
    const { token } = useAuthContext();

// reservation logic

   async function fetchReservations () {
      const response = await fetch("http://localhost:8000/reservation");

      if (response.ok) {
        const data = await response.json();
         setReservations(data)
            let count = 0;
            for (var i = 0; i < data.length; i++) {
              if (data[i].email === account.email && data[i].status == "completed") {
                count++;
              }
              setJumpCount(count);

              let personals = [];
              for (var j = 0; j < reservations.length; j++) {
                if (reservations[j].email === account.email ) {
                  personals.push(reservations[j]);
                  const last = personals[0];
                  setLastJump(last);
                }

              }
            }
      }
    }
      useEffect(() => {
        fetchReservations();
      }, [reservations]);


   // reservation fetch
  const handleFetchWithAPI = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const data = await response.json();
      setAccount(data.account)
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
      {token ? (
        <div>
          <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
            <div className="container py-5 h-100">
              <div
                className="row d-flex justify-content-center align-items-center h-100"
                style={{ marginRight: "405px" }}
              >
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div
                    className="card"
                    style={{ width: "800px", height: "400px" }}
                  >
                    <div className="row g-0">
                      <div
                        className="col-md-4 gradient-custom text-center text-white"
                        style={{ width: "100px", height: "100px" }}
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          style={{
                            width: "100px",
                            height: "100px",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div
                          className="card-body p-4 "
                          style={{ color: "#2AA5A5" }}
                        >
                          {isLoading ? (
                            <p>Loading...</p>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <JSONPretty data={userData.account.first_name} />
                              <div style={{ marginLeft: "3px" }}>
                                <JSONPretty data={userData.account.last_name} />
                              </div>
                              <div style={{ marginLeft: "105px" }}>
                                <JSONPretty data={userData.account.email} />
                              </div>
                            </div>
                          )}
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1"></div>
                          <h6>Jumps Completed: {jumpCount}</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Last jump: {lastJump.date}</h6>
                            </div>
                            <div className="col-6 mb-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profile-jumps">
                      <Link to="/completedJumps">
                        <button type="button" className="btn btn-outline-info">
                          Completed Jumps
                        </button>
                      </Link>
                      <Link to="/scheduledJumps">
                        <button type="button" className="btn btn-outline-info">
                          Scheduled Jumps
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        console.log("Nice try goofy")
      )}
    </>
  );
};

export default Profile;
