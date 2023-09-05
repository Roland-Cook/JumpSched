
function FAQ(){
    return(
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      General Information
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400"><li className="indent"> You must be atleast 18 years old to skydive.</li>
                    <li className="indent"> You must be under 220 lbs(90kg),otherwise it is $2/lb over and up to instructor discretion and weather dependent.</li>
                    <li className="indent">You must be in good health. Please bring a doctors note if you are 65 yrs. or older.</li>
                    <li className="indent">Be mindful of the weather, be prepared to spend a couple hours or more at the dropzone if inclement weather moves in.</li>
                    <li className="indent">You MUST SIGN the legal waiver.</li>
                    <li className="indent">There is a $50 non-refundable deposit required.</li>
                    </p>
              </div>
              <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What should I be wearing when I arrive?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">We reccomend wearing comfortable clothing relative to the season. Pants are preferred</p>
                  <p className="text-gray-500 dark:text-gray-400"> Tennis, running or skate shoes are preferred, NO heels or sandals</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Is this sport actually safe?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400"> With any adventure sport, there is some inherent risk. Skydiving is no different. </p>

                  <p className="text-gray-500 dark:text-gray-400"> All of our instructor have undergone rigourous training and certification and all parachutes are packed by experienced professionals.</p>
                  <p className="text-gray-500 dark:text-gray-400"> Let us reassure you, your safety is our TOP PRIORITY.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Can I bring my camera on the jump? 
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">You can take as many pcitures as you want when you're on the ground, but for saftey reasons you cannot bring your own camera on the jump.</p>
                  <p className="text-gray-500 dark:text-gray-400"> If you would like photos of videos, please consider one of our professional photo/video packages! </p>
              </div>
          </div>
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      How long can I expect to be there?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">In a perfect world, you will jump within an hour of your reserved time slot.</p>
                  <p className="text-gray-500 dark:text-gray-400">However, depending on weaather, you should plan to spend atleast half a day to a full day at the dropzone.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Do I need a reservation?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Reservations are not required but are highly encouraged.</p>
                  <p className="text-gray-500 dark:text-gray-400">if you walk-in, pleasse be prepared to wait atleast half to a full day to get a jump.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Want to grab a license?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Getting your skydiving A license is quite the accomplishment. At the time of writing, a little over 40,000 people, world wide, have a skydiving license. After just 25 jumps you can get a license and really start enjoying the sport. When youre freefalling with some friends, your whole perspective starts to change, and for $32 a jump for licensed jumpers, you can have endless fun without being to hard on your bank account.</p>
                    <p className="mt-6">IAD-(Instructor Assited Deployment)</p>
                    <p className="text-gray-500 dark:text-gray-400">IAD training is the first step to geting your license. the first-jump course ground school only lasts about 5 hours and will teach you the basics of canopy flight and landing techniques, as well as body positioning. Under the guidance of a licensed IAD instructor you'll be ready for your first solo-jump from about 4,000 feet where your parachute will be immediately deployed upon exiting the aircraft. From there, an instructor on the ground will guide you with the use of a radio in a proper flight pattern and landing flare. One major benefit to the IAD course compared to Advanced Free Fall program(known as AFF) is that you learn canopy skills first and work up to free fall, leaving you with the confidence that your canopy skills will ensure you make it to the ground safely, and lets you relax as you hone your free fall skills.</p>
              </div>
          </div>
      </div>
  </div>
</section>
    )
}
export default FAQ;
