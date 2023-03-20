import Typed from 'react-typed';
 
export const Header = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Decentralized
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                  <Typed
                    strings={['POWER','CHARGING']}
                    typeSpeed={40}
                />
                  </span>
                </span>
                <br className="hidden md:block" />
                Stations{' '}
              </h2>
              <p className="text-base text-white md:text-lg">
              India has an active network of 934 active public charging stations.
               Here’s a tool to locate how close a charging station is based on your location
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                  We offer smart, safe and innovative charging solutions
                  </h6>
                  <p className="text-sm text-gray-900">
                  Complete End-to-End Services, from Captive Charger Installations to Maintenance
                  <br/>
                 EV CMS Software
                 <br/>
                  
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                  Find your nearest EV Charge point
                  </h6>
                  <p className="text-sm text-gray-900">
                  Solutions for Cars and Buses
                   <br/>
Attractive offers for Power Public Charging Stations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://img.etimg.com/thumb/msid-87513266,width-1200,height-900,imgsize-45338,overlay-economictimes/photo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };