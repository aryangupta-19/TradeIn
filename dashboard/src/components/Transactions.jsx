import React, { useEffect, useState } from "react";
import axios from "axios";

const formatCurrency = (value) => {
  const amount = Number(value || 0);
  return `₹${amount.toFixed(2)}`;
};

const formatDate = (value) => {
  if (!value) return "--";

  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState("Loading transactions...");

  useEffect(() => {
    axios
      .get("http://localhost:3002/transactions", { withCredentials: true })
      .then((res) => {
        setTransactions(res.data);
        setMessage("");
      })
      .catch((error) => {
        setMessage(error.response?.data?.message || "Unable to fetch transactions");
      });
  }, []);

  return (
    <div className="transactions">
      <h3 className="title">Transactions</h3>

      {transactions.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Stock</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{formatDate(transaction.createdAt)}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.stockName || "--"}</td>
                  <td>{transaction.qty || "--"}</td>
                  <td>{transaction.price ? formatCurrency(transaction.price) : "--"}</td>
                  <td className={transaction.amount >= 0 ? "profit" : "loss"}>
                    {formatCurrency(transaction.amount)}
                  </td>
                  <td>{formatCurrency(transaction.balanceAfter)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders">
          <p>{message || "No transactions yet."}</p>
        </div>
      )}
    </div>
  );
};

export default Transactions;
