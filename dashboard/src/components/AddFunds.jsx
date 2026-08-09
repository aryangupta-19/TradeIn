import React, { useEffect, useState } from "react";
import axios from "axios";

const AddFunds = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const fetchFunds = async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/funds", {
        withCredentials: true,
      });

      if (data.success) {
        setBalance(data.balance);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to fetch funds");
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  const handleDeposit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/funds/deposit",
        { amount: Number(amount) },
        { withCredentials: true }
      );

      if (data.success) {
        setBalance(data.balance);
        setAmount("");
        setMessage("Funds deposited successfully");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Deposit failed");
    }
  };

  const handleWithdraw = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/funds/withdraw",
        { amount: Number(amount) },
        { withCredentials: true }
      );

      if (data.success) {
        setBalance(data.balance);
        setAmount("");
        setMessage("Funds withdrawn successfully");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Withdraw failed");
    }
  };

  return (
    <>
      <h3 className="title">Funds</h3>

      <div className="row">
        <div className="col">
          <h5> ₹{balance.toFixed(2)}  </h5>
          <p>Available Balance</p>
        </div>

        <div className="col">
          <input
            type="number"
            className="fund-input"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="col">
          <button
            className=" btn-blue"
            onClick={handleDeposit}
          >
            Deposit
          </button>

          <button
            className=" btn-green"
            onClick={handleWithdraw}
            style={{ marginLeft: "10px" }}
          >
            Withdraw
          </button>
        </div>

      </div>

      <div className="order-table" style={{ marginTop: "30px" }}>
        <table>
          <thead>
            <tr>
              <th>Balance</th>
              <th>Entered Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>₹{balance.toFixed(2)}</td>
              <td>{amount || "--"}</td>
              <td>{message || "Ready"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddFunds;

