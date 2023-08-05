import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function AddToFavorite() {
  const [data, setData] = useState([]);
  const LikedBooks = useSelector((state) => state.hearted);
  const { id, title, image, description } = LikedBooks;
  const maxVisibleItems = 3;
  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("likedBooks"));
    if (storedData) {
      setData(storedData);
    }
  }, []);
  useEffect(() => {
    setData((prevData) => [...prevData, { ...LikedBooks }]);
    localStorage.setItem("likedBooks", JSON.stringify(data));
  }, [LikedBooks]);

  console.log(JSON.parse(localStorage.getItem("likedBooks")));

  const handleSeeMore = () => {
    setData((prevData) => [
      ...prevData,
      ...LikedBooks.slice(data.length, data.length + maxVisibleItems),
    ]);
  };

  const truncateText = (text, limit) => {
    return text && text.length > limit
      ? text.substring(0, limit) + "..."
      : null;
  };

  return (
    <React.Fragment>
      <div
        id="dropdown"
        style={{
          height: "fit-content",
          display: "hidden",
          position: "absolute",
          left: "74.5%",
          width: "12em",
          height: "fit-content",
          top: "16.5%",
          background: "ghostwhite",
        }}
        class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-gray-700"
      >
        {data.slice(0, maxVisibleItems).map((book) => {
          return (
            <React.Fragment key={book.id}>
              <div className="flex group hover:bg-gray-300">
                {book.image ? (
                  <img
                    src={book.image}
                    alt="picture"
                    style={{
                      width: "50px",
                      cursor: "pointer",
                      height: "65px",
                      margin: "0.5em",
                    }}
                  />
                ) : null}
                <div>
                  <h1
                    style={{
                      fontSize: "10px",
                      textAlign: "center",
                      alignSelf: "flex-start",
                      fontWeight: "bold",
                      marginTop: "1em",
                      cursor: "pointer",
                    }}
                  >
                    {book.title || null}
                  </h1>
                  {book.description ? (
                    <p
                      style={{
                        fontSize: "8px",
                        fontWeight: "bold",
                        margin: "0.4em",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      {truncateText(book.description, 90)}
                    </p>
                  ) : (
                    "No Liked Data exist"
                  )}
                </div>
              </div>
              <hr
                style={{
                  height: "1.5px",
                  background: "darkslategray",
                  marginRight: "1em",
                  marginLeft: "1em",
                }}
              />
            </React.Fragment>
          );
        })}
        {data.length > maxVisibleItems && (
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-700 px-8 flex justify-center py-3 text-center text-sm font-semibold text-white outline-none transition border-none duration-100"
              onClick={handleSeeMore}
              style={{
                margin: "0.4em",
                width: "90px",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              More
            </a>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default AddToFavorite;
