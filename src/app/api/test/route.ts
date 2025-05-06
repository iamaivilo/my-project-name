import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/lib/mongoose';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Connected to MongoDB successfully!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'MongoDB connection failed' },
      { status: 500 }
    );
  }
}
