import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]); // ✅ empty array

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/allOrders`
        );

        setAllOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">

  <h3 className="title">Orders ({allOrders.length})</h3>

  {allOrders.length === 0 ? (

    <div className="no-orders">
      <p>You haven't placed any orders today</p>
      <Link to={"/"} className="btn">Get started</Link>
    </div>

  ) : (

    <table className="holding-table orders-table">

      <thead>
        <tr>
          <th>Instrument</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {allOrders.map((order) => (
          <tr key={order._id}>
            <td>{order.name}</td>
            <td>{order.qty}</td>
            <td>₹ {order.price}</td>
          </tr>
        ))}
      </tbody>

    </table>

  )}

</div>


  );
};

export default Orders;
