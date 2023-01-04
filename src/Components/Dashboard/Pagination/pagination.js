import "./style.css";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ pageNumber, handleChange }) => {
  return (
    <div className="pagination-item">
      <Pagination
        count={9}
        page={pageNumber}
        onChange={handleChange}
        className="pagi"
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
            fontSize: "1.1rem",
            padding: "1.4rem 1rem",
            borderRadius: "50%"
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1.5px solid var(--grey)",
            fontSize: "1.1rem",
            fontWeight: "500",
            padding: "1.4rem 1rem",
            borderRadius: "50%"
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
