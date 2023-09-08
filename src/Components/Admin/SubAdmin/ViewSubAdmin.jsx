import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ViewSubAdmin.css';
import avatarImg from "../../../assets/icons/avatar.png"
import usePagination from '../../Customhook/usePaginate';

const ViewSubAdmin = () => {


  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [data,setData]=useState(null)
  const [checkboxes, setCheckboxes] = useState({
    banUnban: false,
    mute: false,
    kick: false,
    screenshot: false,
    agencyBan: false,
    dpApprove: false,
  });
  const [searchInput, setSearchInput] = useState("");
  const { currentPage, pageLimit, goToPage, changePageLimit } = usePagination();
  const shouldShowPagination = data && data.length > 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/subAdminUser/getall`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
          setData(jsonData.data); 
          // console.log("Fetched Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
  
    fetchData();
  }, []);

   // Pagination 
   const startIndex = (currentPage - 1) * pageLimit;
   const endIndex = startIndex + pageLimit;
 
   //Search
   const filteredData = data ? data.filter(user => {
    const searchTerm = searchInput.toLowerCase();
    const userDetails = user.userDetails || {}; // Ensure userDetails is an object
  
    if (userDetails) {
      const name = userDetails.name || "";
      const userId = user.userId || "";
      const email = user.email || "";
      const mobile = typeof user.mobile === "string" ? user.mobile : "";
      
      if (
        name.toLowerCase().includes(searchTerm) ||
        userId.toLowerCase().includes(searchTerm) ||
        email.toLowerCase().includes(searchTerm) ||
        mobile.toLowerCase().includes(searchTerm)
      ) {
        return true; // Return true if any condition is met
      }
    }
  
    return false; // Return false if none of the conditions are met
  }) : [];
  
 

  console.log(data, "data")


  const handleUpdateClick = (user) => {
    setShowModal(true);
    setSelectedUser(user);
    setCheckboxes({
      banUnban: user.banUnban === 'Allowed',
      mute: user.mute === 'Allowed',
      kick: user.kick === 'Allowed',
      screenshot: user.screenshot === 'Allowed',
      agencyBan: user.agencyBan === 'Allowed',
      dpApprove: user.dpApprove === 'Allowed',
    });
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));
  };

  const handleSaveChanges = () => {
    console.log('Selected User:', selectedUser);
    console.log('Updated Checkboxes:', checkboxes);
    setShowModal(false);
  };

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(filteredData) ? filteredData : [filteredData];
      const visibleData = dataArray.slice(startIndex, endIndex);
      return (
        <>
          {visibleData.map((item, index) => {
            const userDetails = item.userDetails[0];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {userDetails && userDetails.images[0] ? (
                    <img className="images" src={userDetails.images[0]} alt="images" />
                  ) : (
                    <div>No Image</div>
                  )}
                </td>
                <td>{userDetails ? userDetails.name : 'N/A'}</td>
                <td>{item.userId || 'N/A'}</td>
                <td>{item.email || "N/A"}</td>
                <td>{item.mobile || 'N/A'}</td>
                <td>{userDetails ? userDetails.coins : 'N/A'}</td>
                <td>{item.role || "N/A"}</td>
                <td>{userDetails.status || 'N/A'}</td>
              </tr>
            );
          })}
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2>No data available</h2>
          </td>
        </tr>
      );
    }
  };
  

  return (
    <div className="main">
      <h3>Manage SubAdmin</h3>
      <div className="filter">
        <label>Search</label>
        <input
            type="text"
            name="search"
            id="search"
            className="p-1"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='search-button'>Search</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Name</th>
            <th>UniqueId</th>
            <th>Email</th>
            <th> Mobile</th>
            <th>Total Coins</th>
            <th>Role</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
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


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <input
              type="checkbox"
              name="banUnban"
              checked={checkboxes.banUnban}
              onChange={handleCheckboxChange}
            />
            Ban/Unban
          </label>
          <label>
            <input
              type="checkbox"
              name="mute"
              checked={checkboxes.mute}
              onChange={handleCheckboxChange}
            />
            Mute
          </label>
          <label>
            <input
              type="checkbox"
              name="kick"
              checked={checkboxes.kick}
              onChange={handleCheckboxChange}
            />
            Kick
          </label>
          <label>
            <input
              type="checkbox"
              name="screenshot"
              checked={checkboxes.screenshot}
              onChange={handleCheckboxChange}
            />
            ScreentShot & Recording
          </label>
          <label>
            <input
              type="checkbox"
              name="agencyBan"
              checked={checkboxes.agencyBan}
              onChange={handleCheckboxChange}
            />
            Agency Ban
          </label>
          <label>
            <input
              type="checkbox"
              name="dpApprove"
              checked={checkboxes.dpApprove}
              onChange={handleCheckboxChange}
            />
            DP Approve
          </label>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewSubAdmin;
