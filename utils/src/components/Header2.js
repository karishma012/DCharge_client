export const Header2 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
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
              <span className="relative">The</span>
            </span>{' '}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base white md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWjMkZdJLzUM/v1/1200x-1.jpg"
              alt="click"
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://5.imimg.com/data5/HI/FE/ZA/SELLER-80391176/electric-vehicle-charging-stations-500x500.jpg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://staticimg.amarujala.com/assets/images/2022/11/08/750x506/ev-charging-stations-electric-car_1667902126.png?w=414"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5 text-white">
                Sit error voluptatem accusantium
              </h6>
              <p className="text-sm text-white">
                Sportacus andrew weatherall goose Refined gentlemen super mario
                des lynam alpha trion zap rowsdower, omar sharif old.
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5 text-white">
                Cheese on toast airedale the big cheese
              </h6>
              <p className="text-sm text-white">
                Chase ball of string eat plants, meow, and throw up because I ate
                plants going to catch the red dot today going to catch the red dot
                today. I could pee on this if I had the energy.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5 text-white">
                A flower in my garden, a mystery
              </h6>
              <p className="text-sm text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };