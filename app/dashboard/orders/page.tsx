// Page.js

import { fetchOrders } from '@/app/lib/data';

export default async function Orders() {
    const orders = await fetchOrders();
    console.log(orders);

    return (
        <>
            <br />
            <table className="border-collapse border border-gray-500">
                <thead>
                    <tr>
                        <th className="border border-gray-500 px-4 py-2">Order ID</th>
                        <th className="border border-gray-500 px-4 py-2">Customer Name</th>
                        <th className="border border-gray-500 px-4 py-2">Email</th>
                        <th className="border border-gray-500 px-4 py-2">Phone</th>
                        <th className="border border-gray-500 px-4 py-2">Order Date</th>
                        <th className="border border-gray-500 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through each order */}
                    {orders.map((order, index) => (
                        <tr key={index} className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-2xl hover:shadow-black transition-all">
                            <td className="border border-gray-500 px-4 py-2">{order.orderid}</td>
                            <td className="border border-gray-500 px-4 py-2">{order.customername}</td>
                            <td className="border border-gray-500 px-4 py-2">{order.email}</td>
                            <td className="border border-gray-500 px-4 py-2">{order.phone}</td>
                            <td className="border border-gray-500 px-4 py-2">{new Date(order.orderDate).toLocaleString()}</td>
                            <td className="border border-gray-500 px-4 py-2">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
