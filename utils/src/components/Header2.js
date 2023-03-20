export const Header2 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto animate-pulse">
            <span className="relative inline-block ">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative ">The</span>
            </span>{' '}
            Search For Any Charging Station Near You
          </h2>
          <p className="text-base white md:text-lg text-white font-bold">
          People can search the nearest charging station
using google maps API as well as see the number of
spare ports at any given time
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://developers.google.com/static/maps/images/landing/hero_directions_api.png"
              alt="click"
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://developers.google.com/static/maps/images/landing/routes-api.png"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloENMn_ssTXE2mrTryJRdFDl5ReDzvtcfkA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5 text-white font-bold">
                Google API near You
              </h6>
              <p className="text-sm text-white font-bold">
              It helps in auto completing & gives
suggestion of places as user types. It
will help the user find the required
charging station early
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5 text-white font-bold">
              Google Maps Javascript API near You
              </h6>
              <p className="text-sm text-white">
              It helps to get the map on our website
and modify it to display the nearest
charging stations on the map itself
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5 text-white">
              Google Direction's API near You
              </h6>
              <p className="text-sm text-white">
              It shows the direction from the source to the
particular charging stations also get the
distance between the source and the
charging station along with the estimated
time to reach the charging station.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };