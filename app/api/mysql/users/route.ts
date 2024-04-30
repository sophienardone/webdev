import mysql from 'mysql2/promise';
import { NextResponse, NextRequest } from 'next/server';
import { GetDBSettings } from '@/app/sharedCode/common';

export async function GET(request: NextRequest) {
    try {
        const connectionParams = GetDBSettings();

        // Log the connection parameters to verify if the password is included
        console.log('Connection Parameters:', connectionParams);

        const connection = await mysql.createConnection(connectionParams);

        const getQuery = 'SELECT * FROM theshore.users';
        const [rows, fields] = await connection.execute(getQuery);

        connection.end();

        return NextResponse.json({ fields: fields.map((f) => f.name), results: rows });
    } catch (err) {
        console.error('Error:', (err as Error).message);
        return NextResponse.json({ error: (err as Error).message }, { status: 500 });
    }
}
