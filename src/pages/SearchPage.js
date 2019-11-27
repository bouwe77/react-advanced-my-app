import React, { useReducer } from "react";
import { useNumberApi } from "../numbers/api";
import SearchForm from "../search/SearchForm";
import SearchResult from "../numbers/SearchResult";
import useGiphy from "../giphy/useGiphy";
import Gifs from "../giphy/Gifs";

function useSearchReducer(state, action) {
  switch (action.type) {
    case "search": {
      return { ...state, isLoading: true, errorOccurred: false };
    }
    case "success": {
      return { ...state, numberApiResult: action.numberApiResult, isLoading: false };
    }
    case "error": {
      return { ...state, errorOccurred: true, isLoading: false };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  isLoading: false,
  errorOccurred: false,
  numberApiResult: ""
};

function SearchPage() {
  const [state, dispatch] = useReducer(useSearchReducer, initialState);
  const { isLoading, errorOccurred, numberApiResult } = state;

  const { searchNumberApi } = useNumberApi();

  const [gifs, isLoadingGifs] = useGiphy(numberApiResult);

  /**
   * Calls the Numbers API with the given query.
   */
  async function search(query) {
    dispatch({ type: "search" });

    try {
      const numberApiResult = isNaN(query) ? query : await searchNumberApi(query);
      dispatch({ type: "success", numberApiResult });
    } catch (error) {
      dispatch({ type: "error" });
    }
  }

  // Return JSX, which is the UI for this component
  return (
    <>
      <SearchForm search={search} />
      {isLoading && <>loading...</>}
      {errorOccurred ? <>error... :(</> : <SearchResult result={numberApiResult} />}

      <Gifs gifs={gifs} />
    </>
  );
}

export default SearchPage;
