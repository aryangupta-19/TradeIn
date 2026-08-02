import React, {useState, useEffect} from "react";
import axios, {all} from "axios";
import { Link } from "react-router-dom";


const Orders = () => {

  let [orders, setOrders] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders", { withCredentials: true }).then((res) => {
      // console.log(res);
      // console.log(res.data);
      setOrders(res.data);
    });
  },[]);

  return (
    <div className="orders">
      {orders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Order name</th>
                <th>Qty.</th>
                <th>Price.</th>
                <th>Mode</th>
              </tr>
            </thead>
  
            <tbody>
              {orders.map((stock, index) => (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
  
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
