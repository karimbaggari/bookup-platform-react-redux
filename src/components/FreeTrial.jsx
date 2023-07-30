import React from "react";

function FreeTrial() {
  return (
    <React.Fragment>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-800 p-4 sm:flex-row md:p-8">
            <div>
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Start your free trial
              </h2>
              <p className="text-gray-50">No Credit Card required</p>
            </div>
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none transition border-none duration-100"
            >
              Start now
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FreeTrial;
