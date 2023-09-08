import React, { useEffect, useState } from "react";
import "./Topusers.css";
import Title from "../../common/Title";
import usePagination from "../../Customhook/usePaginate";

const Topusers = () => {
  const [data, setData] = useState(null);
  const { currentPage, pageLimit, goToPage, changePageLimit } = usePagination();
  const shouldShowPagination = data && data.length > 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://use2fun.onrender.com/user/topUser`);
        if (!res.ok) {
          throw new Error("Network response is not ok!!!");
        }
        const jsonData = await res.json();
        console.log(jsonData.data);
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const visibleData = data && data.slice(startIndex, endIndex);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomDays = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <Title title="Hostlist User" />
      <button className="hotlist-btn">Add Hot List User</button>
      <table className="">
        <thead>
          <tr>
            <th scope="">Sr. No</th>
            <th scope="col">Image</th>
            <th scope="col">Username</th>
            <th scope="col">Task</th>
            <th scope="col">Day</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data !== null
            ? Object.values(visibleData).map((userData, i) => (
                <tr key={userData._id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img 
                      src={userData.images && userData.images[0]}
                      alt="profile"
                      style={{
                        width: "40px",
                        height: "50px",
                      }}
                    />
                  </td>
                  <td>{userData.name}</td>
                  <td>{getRandomNumber(10, 120)} mins</td>
                  <td>{getRandomDays(1,5)}</td>
                  <td>{userData.mobile}</td>
                  <td>
                    <button className="remove-btn">Make Payment ?</button>
                  </td>
                </tr>
              ))
            : "Data Loading..."}
        </tbody>
      </table>
       {/* //Pagination  */}
       {shouldShowPagination && (
      <div className="pagination">
        <div className="pagination-controls">
          <button className="pagination-btn"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button className="pagination-btn"
            onClick={() => goToPage(currentPage + 1)}
            disabled={endIndex >= data.length}
          >
            Next
          </button>
        </div>
        <div className="page-limit-dropdown">
          <select
            value={pageLimit}
            onChange={(e) => changePageLimit(Number(e.target.value))}
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>
        </div>

      </div>
        )}
    </>
  );
};

export default Topusers;
