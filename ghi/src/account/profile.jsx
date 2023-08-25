import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
   const [reservations, setReservations] = useState([]);
   const [sortBy, setSortBy] = useState("date");
   const [account,setAccount] = useState("")

// reservation logic

   const fetchReservations = (sortByValue) => {
     fetch(`http://localhost:8000/reservation?sort_by=${sortByValue}`)
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
        fetchReservations(sortBy);
      }, [sortBy]);


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

   // reservation fetch


  const handleFetchWithAPI = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/token`;
    try {
      const response = await fetch(url, {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data.account);
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
    <div>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            style={{ marginRight: "405px" }}
          >
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card" style={{ width: "800px", height: "400px" }}>
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
                      <h6>Jump Counter: #</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Days since last jump#</h6>
                        </div>
                        <div className="col-6 mb-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-outline-info">
                  Completed Jumps
                </button>
                <button type="button" className="btn btn-outline-info">
                  Scheduled Jumps
                </button>
                {sortedReservations.filter(res => res.email=== account.email).map(reservation => {
                    return (
                      <>
                        <h1>{reservation.first_name}</h1>
                        <h1>{reservation.time}</h1>
                      </>
                    );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
