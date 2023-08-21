import { Link } from "react-router-dom"

function HeroSection (){
return(
    <header className="masthead">
    <div className="container">
        <div className="masthead-heading text-uppercase">Rocky Mountain Skydive</div>
        <div className="masthead-subheading text-uppercase">Change Your Altitude!</div>
        <Link className="btn btn-primary btn-xl text-uppercase" to="/form">Book Now</Link>
    </div>
</header>
)
}


export default HeroSection