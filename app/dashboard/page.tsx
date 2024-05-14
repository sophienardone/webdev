// page.tsx

import React from 'react';
import Card from '@/app/dashboard/cards';
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data'; // Import fetchInvoices function

export default async function Page() {
    const revenue = await fetchRevenue();
    const invoices = await fetchLatestInvoices(); // Fetch invoices data

    const totalRevenue = revenue.reduce((total, item) => total + item.total_amount, 0);
    const totalInvoices = invoices.length;
    const totalCustomers = new Set(invoices.map(invoice => invoice.customer_name)).size;

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                
                <Card title="Total Revenue" value={totalRevenue} />
                <Card title="Total Invoices" value={totalInvoices}  />
                <Card title="Total Customers" value={totalCustomers} />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {/* <RevenueChart revenue={revenue} /> */}
                {/* <LatestInvoices latestInvoices={invoices} /> */}
            </div>
            
        </main>
    );
}
