import { useState } from 'react';

import './App.css';

interface IInvoiceListProps {
  invoiceData: InvoiceDataType;
  logo?: string;
}

type InvoiceDataType = {
  customerName: string;
  invoices: {
    id: number;
    name: string;
    total: string;
  }[];
  logo?: string;
};

const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.invoiceData;
  return (
    <div>
      <h1>{customerName}</h1>
      <hr />
      <div>
        {invoices.map((invoice) => (
          <div>{invoice.name}</div>
        ))}
      </div>
      <hr />
    </div>
  );
};

const App = () => {
  const data: InvoiceDataType = {
    customerName: 'Google',
    invoices: [
      { id: 123, name: 'Dev work', total: '20.00', paymentStatus: 'paid' },
      {
        id: 456,
        name: 'More Dev work',
        total: '50.00',
        paymentStatus: 'pending',
      },
      {
        id: 789,
        name: 'Something different',
        total: '100.00',
        paymentStatus: 'paid',
      },
    ],
  };

  return (
    <div>
      <InvoiceList invoiceData={data} />
    </div>
  );
};

export default App;
