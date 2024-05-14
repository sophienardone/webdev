import {sql} from '@vercel/postgres';

export async function fetchMenu() {

  
    try {
      const data = await sql`SELECT * FROM menu`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch menu data.');
    }
  }

  export async function fetchLatestInvoices() {
    try {
        const data = await sql`SELECT * FROM invoices`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch latest invoices.');
    }
}

export async function fetchRevenue(){
  try {
      const data = await sql`SELECT month, total_amount FROM revenue`;
      return data.rows.map(row => ({
          month: row.month,
          total_amount: row.total_amount
      }));
  } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchOrders() {

  
  try {
    const data = await sql`SELECT * FROM orders`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch menu data.');
  }
}

export async function fetchReservations() {

  
  try {
    const data = await sql`SELECT * FROM reservations`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch menu data.');
  }
}
