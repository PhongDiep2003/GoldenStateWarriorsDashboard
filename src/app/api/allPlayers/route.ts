// API route to fetch all players from Golden State Warriors
import { BASE_URL } from '@/app/utils/staticInfo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `${BASE_URL}/lookup_all_players.php?id=134865`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    let data = await response.json();
    if (!data || !data.player || data.player.length == 0) {
      return NextResponse.json([], { status: 200 });
    }

    const transformedData = data?.player.map((player: any) => ({
      thumbnail: player?.strThumb || '',
      name: player?.strPlayer || 'Unknown',
      position: player?.strPosition || 'Unknown',
      height: player?.strHeight || 'Unknown',
      weight: player?.strWeight || 'Unknown',
      number: player?.strNumber || 'Unknown',
    }));

    return NextResponse.json(transformedData, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching players:', error);
    return NextResponse.json(
      { error: true, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
