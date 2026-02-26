import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('sessionId');

  if (!sessionId) {
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
  }

  try {
    // For development without database, return empty progress
    if (!process.env.POSTGRES_URL) {
      return NextResponse.json({ progress: {} });
    }

    const { rows } = await sql`
      SELECT progress FROM user_progress 
      WHERE session_id = ${sessionId}
      ORDER BY updated_at DESC
      LIMIT 1
    `;

    if (rows.length === 0) {
      return NextResponse.json({ progress: {} });
    }

    return NextResponse.json({ progress: rows[0].progress });
  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json({ progress: {} });
  }
}

export async function POST(request: Request) {
  try {
    const { sessionId, progress } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    // For development without database, just return success
    if (!process.env.POSTGRES_URL) {
      return NextResponse.json({ success: true, message: 'Development mode - progress not persisted' });
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS user_progress (
        id SERIAL PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        progress JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create index for better performance
    await sql`
      CREATE INDEX IF NOT EXISTS idx_session_id ON user_progress(session_id)
    `;

    // Check if record exists
    const { rows: existing } = await sql`
      SELECT id FROM user_progress 
      WHERE session_id = ${sessionId}
      LIMIT 1
    `;

    if (existing.length > 0) {
      // Update existing record
      await sql`
        UPDATE user_progress 
        SET progress = ${JSON.stringify(progress)},
            updated_at = CURRENT_TIMESTAMP
        WHERE session_id = ${sessionId}
      `;
    } else {
      // Insert new record
      await sql`
        INSERT INTO user_progress (session_id, progress, created_at, updated_at)
        VALUES (${sessionId}, ${JSON.stringify(progress)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving progress:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to save progress' 
    }, { status: 500 });
  }
}