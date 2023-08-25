import React, { useState, useEffect } from "react";
import './Chatbubble.css';

const ChatBubble = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("https://use2fun.onrender.com/admin/chatBubble/getall")
      .then((res) => res.json())
      .then((data) => setData(data.data)) 
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="chat-bubble">
      {data?
      data.map((item) => (
        <div key={item._id}>
          <p>Price: {item.price}</p>
          <img className="chatbubbleimg" src={item.images} alt="image" />
        </div>
      ))  : <td colSpan="8">
      <h2>No data available</h2>
    </td>
  }
    </div>
  );
};

export default ChatBubble;
