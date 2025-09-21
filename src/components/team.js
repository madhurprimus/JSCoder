const Team = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Meet our team
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Get to know the passionate professionals who are committed to
            driving innovation and excellence in our team.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:max-w-4xl xl:max-w-none"
        >
          <li className="flex flex-col items-start gap-x-10 gap-y-6 xl:flex-row">
            <div className="flex-none">
              <div className="relative aspect-square w-56 overflow-hidden rounded-full bg-gray-200">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full rounded-full ring-1 ring-inset ring-gray-900/10"
                ></span>
                <img
                  width="400"
                  height="400"
                  className="h-full w-full object-cover"
                  src="../media/user-avatar.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-auto">
              <h3 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                Madhur Rastogi
              </h3>
              <p className="text-lg leading-8 text-gray-600">
                Senior Developer
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                An expert in streamlining operations and enhancing
                organizational efficiency, He ensures our team performs at its
                best.
              </p>
              <ul role="list" className="mt-6 flex gap-x-5">
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col items-start gap-x-10 gap-y-6 xl:flex-row">
            <div className="flex-none">
              <div className="relative aspect-square w-56 overflow-hidden rounded-full bg-gray-200">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full rounded-full ring-1 ring-inset ring-gray-900/10"
                ></span>
                <img
                  width="400"
                  height="400"
                  className="h-full w-full object-cover"
                  src="../media/user-avatar.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-auto">
              <h3 className="text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                Manish Chawla
              </h3>
              <p className="text-lg leading-8 text-gray-600">Senior Developer</p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                With a strong focus on product strategy and innovation, Manish
                drives the development of user-centered solutions.
              </p>
              <ul role="list" className="mt-6 flex gap-x-5">
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"></path>
                    </svg>
                  </a>
                </li>
                <li>
            
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;