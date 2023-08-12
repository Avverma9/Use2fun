import React, { useState, useEffect } from "react";
import './Chatbubble.css';

const ChatBubble = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    fetch("https://use2fun.onrender.com/admin/chatBubble/getall")
      .then((res) => res.json())
      .then((data) => setData(data.data)) // Set the fetched data's "data" property
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="chat-bubble">
      {data.map((item) => (
        <div key={item._id}>
          <p>Price: {item.price}</p>
          <img src={item.images} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default ChatBubble;
