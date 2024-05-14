// Reservations.js

import { fetchReservations } from '@/app/lib/data'; // Assuming you have a function to fetch reservations data

export default async function Reservations() {
    // Fetch reservations data
    const reservations = await fetchReservations();

    return (
        <>
            <br />
            <table className="border-collapse border border-gray-500">
                <thead>
                    <tr>
                        <th className="border border-gray-500 px-4 py-2">Reservation ID</th>
                        <th className="border border-gray-500 px-4 py-2">Customer Name</th>
                        <th className="border border-gray-500 px-4 py-2">Email</th>
                        <th className="border border-gray-500 px-4 py-2">Phone</th>
                        <th className="border border-gray-500 px-4 py-2">Date</th>
                        <th className="border border-gray-500 px-4 py-2">Time</th>
                        <th className="border border-gray-500 px-4 py-2">Number of Guests</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through each reservation */}
                    {reservations.map((reservations, index) => (
                        <tr key={index} className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-2xl hover:shadow-black transition-all">
                            <td className="border border-gray-500 px-4 py-2">{reservations.reservationid}</td>
                            <td className="border border-gray-500 px-4 py-2">{reservations.customername}</td>
                            <td className="border border-gray-500 px-4 py-2">{reservations.email}</td>
                            <td className="border border-gray-500 px-4 py-2">{reservations.phone}</td>
                            <td className="border border-gray-500 px-4 py-2">{new Date(reservations.date).toLocaleDateString()}</td>
                            <td className="border border-gray-500 px-4 py-2">{reservations.time}</td>
                            <td className="border border-gray-500 px-4 py-2">{reservations.numberofguests}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
