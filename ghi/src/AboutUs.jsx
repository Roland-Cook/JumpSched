import two from "./images/12.png";
import six from "./images/12.png";
import "./styles.css"

function AboutUs() {
  return (
    <>

      <section className="py-12">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-md-5">
              <div className="ms-md-2 ms-lg-5">
                <iframe
                  className="img-fluid rounded-3"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qjmlyvBm8Js?si=uYSmvUncqN13fdMX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5 about-space">
                {/* <span className="text-muted">Our Story</span> */}
                <h2 className="display-6 fw-bold">About Us</h2>
                <p className="lead">
                  Tandem Skydiving, family outings, wedding proposals, parties-
                  the Sky's the Limit! We're here to make sure you have a fun,
                  safe parachuting experience. Skydiving could be a life
                  changing event for you. It only takes a brief training session
                  and you're ready to have the thrill of a lifetime!
                </p>
                <p className="lead mb-0">
                  You can also jump solo your first time and become the Skydiver
                  you've always wanted to be with our First Jump Course. Our
                  facility is perfect for Team Building exercises for employers
                  to boost morale!
                </p>
                <h2 className="display-6 fw-bold">News</h2>
                <p className="lead mb-0">
                  We're closed Thursdays. Bookings online available, open
                  Summerimg-fluid rounded-3 hours, 9am to 4pm. We have Cash
                  discounts call or text 303 944-9708
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
}

export default AboutUs;
