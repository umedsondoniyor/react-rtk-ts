import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchResultsAsync, selectResults } from "./resultsSlice";
import PaginationControls from "../../components/PaginationControls";
import ResultItem from "../../components/ResultItem";
import { useDispatch } from "react-redux"; // Add this import
import { AppDispatch } from "../../app/store"; // Add this import

// Add this interface
interface ResultItemData {
  id: number;
  // Add other properties with their types as per your data structure
}


const Results: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Update this line
  const { results, status } = useSelector(selectResults);
  const date = "2023-04-06";
  const limit = 10;
  const desc = true;
  

  useEffect(() => {
    dispatch(fetchResultsAsync({ date, page: 1, limit, desc }));
  }, [dispatch, date, limit, desc]);
  

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {results.map((result: ResultItemData, index: number) => (
              <li key={index}>
                <ResultItem data={result} />
              </li>
            ))}
          </ul>
          <PaginationControls date={date} limit={limit} desc={desc} />
        </>
      )}
    </div>
  );
};

export default Results;
