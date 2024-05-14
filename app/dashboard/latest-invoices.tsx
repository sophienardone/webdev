// latest-invoices.tsx

import React from 'react';

// Define the Invoice interface
export interface Invoice {
    id: number;
    amount: number;
    customer_name: string;
    customer_email: string;
    date: string;
}

interface LatestInvoicesProps {
    latestInvoices: Invoice[];
}

const LatestInvoices: React.FC<LatestInvoicesProps> = ({ latestInvoices }) => {
    // Transform the latest invoices data here
    const invoiceData = latestInvoices.map(row => ({
        id: row.id,
        amount: row.amount,
        customer_name: row.customer_name,
        customer_email: row.customer_email,
        date: row.date
    }));

    return (
        <div>
            <h2>Latest Invoices</h2>
            <ul>
                {invoiceData.map((invoice) => (
                    <li key={invoice.id}>
                        <p>Invoice ID: {invoice.id}</p>
                        <p>Amount: ${invoice.amount.toFixed(2)}</p>
                        <p>Customer: {invoice.customer_name}</p>
                        <p>Email: {invoice.customer_email}</p>
                        <p>Date: {invoice.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LatestInvoices;



