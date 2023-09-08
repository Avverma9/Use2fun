import React, { useEffect, useState } from 'react';
import styles from "./Specialid.module.css"
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SpecialIdComp = () => {
  const [specialIdData, setSpecialIdData] = useState({
    id: '',
    price: '',
    day: '',
  });
  const [data, setData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [editedData, setEditedData] = useState({
    images: null,
    price: '',
    level:'',
    day: '',
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);



  const fetchData = async () => {
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/specialId/getall");
      if (!response.ok) {
        throw new Error("network issue");
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("vehicle", jsonData.data)
      setSelectedActions(Array(jsonData.data.length).fill('action'));
    } catch (error) {
      console.error("error fetching data", error)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);



  const handleDropdownChange = (index, action) => {
    const updatedActions = [...selectedActions];
    updatedActions[index] = action;
    setSelectedActions(updatedActions);
    setSelectedItem(index);

    switch (action) {
      case "update":
        setShowEditModal(true);
        setEditedData(data[index]);
        break;
      case "remove":
        setShowRemoveModal(true);
        break;
      default:
        setSelectedItem(null);
        break;
    }
  }

  const handleConfirmDelete = async () => {
    if (selectedItem !== null) {
      const selectedItemData = data[selectedItem];
      console.log(selectedItemData._id, "Selected Id");

      try {
        const response = await fetch(`https://use2fun.onrender.com/admin/vehicle/delete/${selectedItemData._id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          toast.error("Error while deleting the data")
        } else {
          toast.success("Data successfully deleted")
        }

        const updatedData = [...data];
        updatedData.splice(selectedItem, 1);
        setData(updatedData);
        const updatedActions = [...selectedActions];
        updatedActions.splice(selectedItem, 1);
        setSelectedActions(updatedActions);


        setShowRemoveModal(false);
        setSelectedItem(null);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpecialIdData({
      ...specialIdData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!specialIdData.id || !specialIdData.price || !specialIdData.day) {
      toast.error("All fields are required");
      return;
    }
  
    try {
      const response = await fetch("https://use2fun.onrender.com/admin/specialId/add", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(specialIdData),
      });
  
      if (!response.ok) {
        toast.error("Error while adding special ID")
      } else {
        toast.success("Special ID added successfully")
        setSpecialIdData({
          id: '',
          price: '',
          day: '',
        });
        fetchData()
      }
    } catch (error) {
      console.error("Error adding special ID:", error);
    }
  };
  


  const handleUpdateSubmit = async () => {
    const formDataToSend = new FormData();
    if (editedData.images) {
      formDataToSend.append('images', editedData.images);
    }
    formDataToSend.append('price', editedData.price);
    formDataToSend.append('level', editedData.level);
    formDataToSend.append('day', editedData.day);
    console.log(editedData._id)
    try {
      const response = await fetch(`https://use2fun.onrender.com/admin/vehicle/update/${editedData._id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        toast.error("Error while updating the data")
      } else {
        toast.success("Data Successfully edited")
      }

      fetchData();
      setShowEditModal(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedItem(null);

    if (selectedItem !== null) {
      const updatedActions = [...selectedActions];
      updatedActions[selectedItem] = 'action';
      setSelectedActions(updatedActions);
    }
  };

  const handleCloseRemoveModal = () => {
    setShowRemoveModal(false);
    setSelectedItem(null);

    if (selectedItem !== null) {
      const updatedActions = [...selectedActions];
      updatedActions[selectedItem] = 'action';
      setSelectedActions(updatedActions);
    }
  };


  const handleEditFormChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    setEditedData({
      ...editedData,
      [name]: newValue,
    });
  };



  return (
    <div>
         <div>
        <h2>Special ID</h2>
        <div >
          <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
            <p>Special Id</p>
            <input
              type="text"
              name="id"
              value={specialIdData.id}
              onChange={handleInputChange}
              placeholder='Enter Special Id'
            />

            <p>Price</p>
            <input
              type="number"
              name="price"
              value={specialIdData.price}
              onChange={handleInputChange}
              placeholder='Enter Price'
            />

            <p>Day</p>
            <input
              type="number"
              name="day"
              value={specialIdData.day}
              onChange={handleInputChange}
              placeholder='Enter Price'
            />
            <button type="submit" className='submit-btn-b'>SUBMIT</button>
          </form>
        </div>
      </div>

      
      {/* //Table  */}
      <div className={styles.viewframemain}>
      <h3>View Special Id</h3>


      <table className={styles['table-style']}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Special Id</th>
            <th>Price</th>
            <th>Validity</th>
            {/* <th>Action</th> */}
          </tr>
          {data ? data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1 || "N/A"}</td>
              {/* <td><img className={styles.images} src={item.images[0] || "N/A"} alt='image' /></td> */}
              <td>{item.id || "N/A"}</td>
              <td>{item.price || "N/A"}</td>
              <td>{item.day || "N/A"}</td>
              {/* <td>      <select className="selectbar" value={selectedActions[index]} onChange={(e) => handleDropdownChange(index, e.target.value)}>
                <option value="action">Action</option>
                <option value="update">Update</option>
                <option value="remove">Remove</option>
              </select>
              </td> */}


            </tr>
          ))

            : <td colSpan="8">
              <h2>No data available</h2>
            </td>
          }
        </thead>

      </table>


      
      {/* //Delete Modal  */}
      <Modal show={showRemoveModal} onHide={handleCloseRemoveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemoveModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Update Modal  */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              {/* Price */}
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  value={editedData.price}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
               {/* level  */}
               <Form.Group controlId="formBasicDescription">
                <Form.Label>Level</Form.Label>
                <Form.Control
                  type="number"
                  name="level"
                  placeholder="Enter level"
                  value={editedData.level}
                  onChange={handleEditFormChange}
                />
              </Form.Group>

              {/* Duration */}
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="number"
                  name="day"
                  placeholder="Enter Duration"
                  value={editedData.day}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
    </div>
  )
}

export default SpecialIdComp