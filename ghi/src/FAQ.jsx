import React from "react"

function FAQ(){
    return(
        <div>
            <h1><strong>First time? You probably have some questions.</strong></h1>
            <div className="faq-info">
            <div className = "faq-box">
            <h2> Here are some of our most frequent questions.</h2>
            <ul>
                <li>
                    <div><strong>Things to know before arriving:</strong></div>
                    <ul className="answer">
                    <li className="indent"> You must be atleast 18 years old to skydive.</li>
                    <li className="indent"> You must be under 220 lbs(90kg),otherwise it is $2/lb over and up to instructor discretion and weather dependent.</li>
                    <li className="indent">You must be in good health. Please bring a doctors note if you are 65 yrs. or older.</li>
                    <li className="indent">Be mindful of the weather, be prepared to spend a couple hours or more at the dropzone if inclement weather moves in.</li>
                    <li className="indent">You MUST SIGN the legal waiver.</li>
                    <li className="indent">There is a $50 non-refundable deposit required.</li>
                    </ul>
                </li>
                <li>
                    <div><strong>What should I be wearing when I arrive?</strong></div>
                    <ul className="answer">
                    <li className="indent">We reccomend wearing comfortable clothing relative to the season.Pants are preferred</li>
                    <li className="indent">Tennis, running or skate shoes are preferred, NO heels or sandals</li>
                    </ul>
                </li>
                <li>
                    <div><strong>Is this sport actually safe?</strong></div>
                    <ul className="answer">
                    <li className="indent">With any adventure sport, there is some inherent risk. Skydiving is no different.</li>
                    <li className="indent">All of our instructor have undergone rigourous training and certification and all parachutes are packed by experienced professionals.</li>
                    <li className="indent">Let us reassure you, your safety is our TOP PRIORITY.</li>
                    </ul>
                </li>
                <li>
                    <div><strong> Can I bring my camera on the jump?</strong></div>
                    <ul className="answer">
                    <li className="indent">You can take as many pcitures as you want when you're on the ground, but for saftey reasons you cannot bring your own camera on the jump.</li>
                    <li className="indent">If you would like photos of videos, please consider one of our professional photo/video packages!</li>
                    </ul>
                </li>
                <li>
                    <div><strong> How long can I expect to be there?</strong></div>
                    <ul className="answer">
                    <li className="indent">In a perfect world, you will jump within an hour of your reserved time slot.</li>
                    <li className="indent">However, depending on weaather, you should plan to spend atleast half a day to a full day at the dropzone</li>
                    </ul>
                </li>
                <li>
                    <div><strong>Do I need a reservation?</strong></div>
                    <ul className="answer">
                    <li className="indent">Reservations are not required but are highly encouraged</li>
                    <li className="indent">if you walk-in, pleasse be prepared to wait atleast half to a full day to get a jump.</li>
                    </ul>
                </li>
            </ul>
            </div>
            <div className="faq-box">
                <h1><strong>Want to grab a license?</strong></h1>
                {/* <h2><strong>Did a tandem and loved it? Here what you can expect if you decide to go after a license.</strong></h2> */}
                <div>
                    <p className="indent">Getting your skydiving A license is quite the accomplishment. At the time of writing, a little over 40,000 people, world wide, have a skydiving license. After just 25 jumps you can get a license and really start enjoying the sport. When youre freefalling with some friends, your whole perspective starts to change, and for $32 a jump for licensed jumpers, you can have endless fun without being to hard on your bank account.</p>
                    <p>IAD-(Instructor Assited Deployment)</p>
                    <p className="indent">IAD training is the first step to geting your license. the first-jump course ground school only lasts about 5 hours and will teach you the basics of canopy flight and landing techniques, as well as body positioning. Under the guidance of a licensed IAD instructor you'll be ready for your first solo-jump from about 4,000 feet where your parachute will be immediately deployed upon exiting the aircraft. From there, an instructor on the ground will guide you with the use of a radio in a proper flight pattern and landing flare. One major benefit to the IAD course compared to Advanced Free Fall program(known as AFF) is that you learn canopy skills first and work up to free fall, leaving you with the confidence that your canopy skills will ensure you make it to the ground safely, and lets you relax as you hone your free fall skills.</p>
                </div>
            </div>
            </div>
        </div>

    )
}
export default FAQ;
