import React from "react";
import { useSelector } from "react-redux";
import { Pagination } from "@material-ui/lab";
import { fetchResultsAsync, selectResults } from "../features/results/resultsSlice";
import { useDispatch } from "react-redux"; // Add this import
import { AppDispatch } from "../app/store"; // Add this import

interface PaginationControlsProps {
  date: string;
  limit: number;
  desc: boolean;
}


const PaginationControls: React.FC<PaginationControlsProps> = ({ date, limit, desc }) => {
  const dispatch: AppDispatch = useDispatch(); // Update this line
  const { totalPages, currentPage } = useSelector(selectResults);

  // console.log("Total Pages:", totalPages); // Add this line

  const handleChangePage = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(fetchResultsAsync({ date, page, limit, desc }));
  };

  return (
    
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handleChangePage}
      color="primary"
      shape="rounded"
      size="large"
    />
  );
};

export default PaginationControls;
