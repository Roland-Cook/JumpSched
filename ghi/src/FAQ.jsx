import React from "react"

function FAQ(){
    return(
        <div>
            <h1>First time? You probably have some questions.</h1>
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
        </div>

    )
}
export default FAQ;