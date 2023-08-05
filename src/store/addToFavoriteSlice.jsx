import React from "react";

const initialState = {
  id: "",
  title: "",
};

export function addToFavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        id: action.payload.bookId,
        title: action.payload.bookTitle,
        image: action.payload.bookImage,
        description: action.payload.bookDescription
      };
    default:
      return state;
  }
}
