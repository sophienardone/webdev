import {sql} from '@vercel/postgres';

export async function fetchMenu() {

  
    try {
      const data = await sql`SELECT * FROM menu`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch games data.');
    }
  }
