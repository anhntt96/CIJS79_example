import React from "react";
import { useParams } from "react-router-dom";
import invoices from "../data/dataInvoices";
const InvoicesDetail = () => {
  const params = useParams();
  console.log(params);

  const invoice = invoices.find((item) => item.id.toString() == params.id);

  return (
    <div>
      <div>ID: {invoice.id}</div>
      <div>Name: {invoice.name}</div>
    </div>
  );
};

export default InvoicesDetail;
