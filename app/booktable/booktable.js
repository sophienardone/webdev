// import { useState } from 'react';
// import { bookTable } from '@/app/lib/data';

// export default function BookTable() {
//   const [formData, setFormData] = useState({
//     customerName: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     numberOfGuests: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await bookTable(formData.customerName, formData.email, formData.phone, formData.date, formData.time, formData.numberOfGuests);
//       console.log(response);
//       // Optionally, handle success message or redirect to a thank you page
//     } catch (error) {
//       console.error('Error booking table:', error);
//       // Optionally, handle error message
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="customerName">Name:</label>
//       <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} />
      
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      
//       <label htmlFor="phone">Phone:</label>
//       <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
      
//       <label htmlFor="date">Date:</label>
//       <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
      
//       <label htmlFor="time">Time:</label>
//       <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
      
//       <label htmlFor="numberOfGuests">Number of Guests:</label>
//       <input type="number" id="numberOfGuests" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} />
      
//       <button type="submit">Book Now</button>
//     </form>
//   );
// }
