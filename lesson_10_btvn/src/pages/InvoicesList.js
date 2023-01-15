import React from "react";
import { Link } from "react-router-dom";
import invoices from "../data/dataInvoices";

const InvoicesList = () => {
  return (
    <div>
      {invoices.map((item) => {
        return (
          <div className="mt-3" key={item.id}>
            <Link to={item.id.toString()}> {item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default InvoicesList;
