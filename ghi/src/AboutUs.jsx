import two from "./images/12.png";
import six from "./images/12.png";
import "./styles.css"

function AboutUs() {
  return (
    <>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">About Us</h2>
              <p className="font-italic text-muted mb-4">
                Tandem Skydiving, family outings, wedding proposals, parties-
                the Sky's the Limit! We're here to make sure you have a fun,
                safe parachuting experience. Skydiving could be a life changing
                event for you. It only takes a brief training session and you're
                ready to have the thrill of a lifetime! You can also jump solo
                your first time and become the Skydiver you've always wanted to
                be with our First Jump Course. Our facility is perfect for Team
                Building exercises for employers to boost morale!
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src={two} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img src={six} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">News</h2>
              <p className="font-italic text-muted mb-4">
                We're closed Thursdays. Bookings online available, open Summer
                hours, 9am to 4pm. We have Cash discounts 303 944-9708
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default AboutUs;
