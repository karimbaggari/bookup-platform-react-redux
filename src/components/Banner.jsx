import React from "react";

function Banner() {
  return (
    <React.Fragment>
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div
          className=" flex flex-wrap justify-between"
          style={{
            position: "relative",
            bottom: "3em",
          }}
        >
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3">
            <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
              Find your
              <br />
              <span className="text-indigo-500">BOOK</span> Online
            </h1>

            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>

            <form style={{ marginTop: "2em" }}>
              <label
                htmlhtmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-white"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div
              className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0"
              style={{ height: "23em" }}
            >
              <img
                src="https://parentotheca.com/wp-content/uploads/2021/12/IMG_5071-scaled.jpg"
                style={{ width: "40em" }}
                loading="lazy"
                alt="Photo by Kaung Htet"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="https://i0.wp.com/vincentcarlos.com/wp-content/uploads/2022/06/atomic-habits-book-summary.jpg?fit=19201438&ssl=1"
                loading="lazy"
                style={{ width: "40em" }}
                alt="Photo by Manny Moreno"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Banner;
