import React, { useEffect, useState } from "react";
import booksData from "../data/landing-books-data.json";
function Gallery() {
  const [data, setData] = useState([]);
  const [renderNum, setRenderNum] = useState(15);
  useEffect(() => {
    for (let i = 0; i < renderNum; i++) {
      if (i < booksData.length) {
        setData((prevData) => [...prevData, booksData[i]]);
      } else {
        return;
      }
    }
  }, [renderNum]);
  console.log(data.length, renderNum)
  const showMore = (num, event) => {
    event.preventDefault();
    setRenderNum((prevNum) => prevNum * num);
  };
  return (
    <React.Fragment>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Gallery
          </h2>
          <div
            className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8"
            style={{ "grid-template-columns": "repeat(5, 1fr)" }}
          >
            {data.map((e) => {
              return (
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={e.imageLink}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 font-bold text-left inline-block text-sm text-white md:text-lg">
                    {e.title}
                  </span>
                </a>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-700 px-8 flex justify-center py-3 text-center text-sm font-semibold text-white outline-none transition border-none duration-100"
              onClick={(event) => showMore(2, event)}
            >
              More
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Gallery;
