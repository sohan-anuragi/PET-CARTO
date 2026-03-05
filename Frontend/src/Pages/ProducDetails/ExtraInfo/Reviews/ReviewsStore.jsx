import { createContext, useReducer } from "react";
import ReviewsData from "./ReviewsData";
import { useContext } from "react";

export const ReviewsContext = createContext();

const initialState = {
  reviews: ReviewsData,
};

function reviewsReducer(state, action) {
  switch (action.type) {
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    default:
      return state;
  }
}

export function ReviewsProvider({ children }) {
  const [state, dispatch] = useReducer(reviewsReducer, initialState);

  return (
    <ReviewsContext.Provider
      value={{
        reviews: state.reviews,
        dispatch,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}
